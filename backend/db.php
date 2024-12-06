<?php
// Database connection
$host = 'localhost';
$db = 'db6madmwhxsmg0';
$user = 'ug98aliywitj2';
$password = 'zt9qdwgsmdo5';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Database connected successfully!<br>";

    // Insert data
    $stmt = $pdo->prepare("INSERT INTO users (google_id, name, email) VALUES (:google_id, :name, :email)");
    $stmt->execute([
        'google_id' => '123456789',
        'name' => 'John Doe',
        'email' => 'johndoe@example.com'
    ]);
    echo "User inserted successfully!<br>";

    // Update data
    $stmt = $pdo->prepare("UPDATE users SET name = :name WHERE google_id = :google_id");
    $stmt->execute([
        'google_id' => '123456789',
        'name' => 'John Smith'
    ]);
    echo "User updated successfully!<br>";

    // Retrieve data
    $stmt = $pdo->query("SELECT * FROM users");
    echo "<strong>Retrieved Users:</strong><br>";
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "ID: " . $row['id'] . " - Google ID: " . $row['google_id'] . " - Name: " . $row['name'] . " - Email: " . $row['email'] . " - Created At: " . $row['created_at'] . "<br>";
    }


} catch (PDOException $e) {
    die("Database operation failed: " . $e->getMessage());
}
?>