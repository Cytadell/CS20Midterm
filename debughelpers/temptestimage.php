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

// Fetch the image data
$id = 3; // Replace with the ID of the image you want to retrieve
$sql = "SELECT image FROM mytable WHERE id = ?";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Statement preparation failed: " . $conn->error);
}
$stmt->bind_param("i", $id);
$stmt->execute();
$stmt->bind_result($imageData);
$stmt->fetch();
$stmt->close();
$conn->close();

// Output the image
if ($imageData) {
    header("Content-Type: image/jpeg"); // Adjust content type if the image is not JPEG
    echo $imageData;
} else {
    echo "No image found for ID {$id}.";
}
?>
