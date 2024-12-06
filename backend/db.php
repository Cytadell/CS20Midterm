<?php
// Database connection
$host = 'localhost';
$db = 'db6madmwhxsmg0';
$user = 'ug98aliywitj2';
$password = 'zt9qdwgsmdo5';

// Holder arrays
$favorites = [];
$contacted_properties = [];
$listings = [];

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Database connected successfully!<br>";

    // Insert data
    $stmt = $pdo->prepare("INSERT INTO users (google_id, name, email, favorites, contacted_properties, listings) VALUES (:google_id, :name, :email, :favorites, :contacted_properties, :listings)");
    $stmt->execute([
        'google_id' => '123456789',
        'name' => 'John Doe',
        'email' => 'johndoe@example.com',
        'favorites' => json_encode($favorites),
        'contacted_properties' => json_encode($contacted_properties),
        'listings' => json_encode($listings)
    ]);
    echo "User inserted successfully!<br>";

    // Update data
    $stmt = $pdo->prepare("UPDATE users SET name = :name, favorites = :favorites, contacted_properties = :contacted_properties, listings = :listings WHERE google_id = :google_id");
    $stmt->execute([
        'google_id' => '123456789',
        'name' => 'John Smith',
        'favorites' => json_encode($favorites),
        'contacted_properties' => json_encode($contacted_properties),
        'listings' => json_encode($listings)
    ]);
    echo "User updated successfully!<br>";

    // Retrieve data
    $stmt = $pdo->query("SELECT * FROM users");
    echo "<strong>Retrieved Users:</strong><br>";
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $favorites = json_decode($row['favorites'], true);
        $contacted_properties = json_decode($row['contacted_properties'], true);
        $listings = json_decode($row['listings'], true);
        echo "ID: " . $row['id'] . " - Google ID: " . $row['google_id'] . " - Name: " . $row['name'] . " - Email: " . $row['email'] . " - Favorites: " . implode(', ', $favorites) . " - Contacted Properties: " . implode(', ', $contacted_properties) . " - Listings: " . implode(', ', $listings) . " - Created At: " . $row['created_at'] . "<br>";
    }


} catch (PDOException $e) {
    die("Database operation failed: " . $e->getMessage());
}
?>