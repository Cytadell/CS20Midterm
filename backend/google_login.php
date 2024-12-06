<?php
require_once "db.php";
require_once "vendor/autoload.php"; // Google API client

use Google\Client;

function verifyGoogleToken($idToken) {
    $client = new Client();
    $client->setClientId("672337419683-7pqj3b43qk3251t6c1g4eqib4nue7mte.apps.googleusercontent.com");

    try {
        $payload = $client->verifyIdToken($idToken);
        return $payload; // Return user data if valid
    } catch (Exception $e) {
        return null; // Invalid token
    }
}

header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $idToken = $input['token'];

    $userData = verifyGoogleToken($idToken);
    if (!$userData) {
        http_response_code(401);
        echo json_encode(["error" => "Invalid token"]);
        exit;
    }

    // Extract user data
    $googleId = $userData['sub'];
    $email = $userData['email'];
    $name = $userData['name'];
    $picture = $userData['picture'];

    // Database interaction
    $pdo = connectDB();
    $stmt = $pdo->prepare("SELECT * FROM users WHERE google_id = :google_id");
    $stmt->execute(['google_id' => $googleId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        $stmt = $pdo->prepare("INSERT INTO users (google_id, email, name, picture) VALUES (:google_id, :email, :name, :picture)");
        $stmt->execute([
            'google_id' => $googleId,
            'email' => $email,
            'name' => $name,
            'picture' => $picture,
        ]);
        $user = [
            'id' => $pdo->lastInsertId(),
            'google_id' => $googleId,
            'email' => $email,
            'name' => $name,
            'picture' => $picture,
        ];
    }

    // Create session
    session_start();
    $_SESSION['user'] = $user;
    echo json_encode(["user" => $user]);
}
?>
