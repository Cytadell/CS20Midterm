<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection
$conn = new mysqli('localhost', 'uvu8gbrv0khs9', '[7g3c{2~Ow@&', 'db6madmwhxsmg0');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if an ID is provided
if (!isset($_GET['id'])) {
    die("No image ID provided.");
}

$id = intval($_GET['id']); // Sanitize input

// Query the database to retrieve the image
$sql = "SELECT SQL_NO_CACHE image FROM mytable WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $id);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($imageData);

if ($stmt->fetch()) {
    header("Content-Type: image/jpeg");
    echo $imageData;
} else {
    header("Content-Type: image/jpeg");
    readfile("img/placeholder.jpg");
}

$stmt->close();
$conn->close();
