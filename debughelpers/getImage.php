<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection
$conn = new mysqli('localhost', 'ug98aliywitj2', 'zt9qdwgsmdo5', 'db6madmwhxsmg0');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if an ID is provided
if (!isset($_GET['id'])) {
    die("No image ID provided.");
}

$id = intval($_GET['id']); // Sanitize input

// Query the database to retrieve the image
$sql = "SELECT image FROM mytable WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $id);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($imageData);

if ($stmt->fetch()) {
    // Serve the image
    header("Content-Type: image/jpeg"); // Adjust MIME type if needed (e.g., image/png)
    echo $imageData;
} else {
    // Serve a placeholder image if no image is found
    header("Content-Type: image/jpeg");
    readfile("img/placeholder.jpg"); // Path to your placeholder image
}

$stmt->close();
$conn->close();
