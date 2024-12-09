<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Expires: Sat, 01 Jan 2000 00:00:00 GMT");

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection
$conn = new mysqli('localhost', 'uvu8gbrv0khs9', '[7g3c{2~Ow@&', 'db6madmwhxsmg0');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query the database
$sql = "SELECT SQL_NO_CACHE id, title, address, type, price, distance, datePosted, phone, campus, perBedroomPrice, 
        pricingType, buildingType, beds, baths, utilities, laundry, furnished, transport, pet, wifi 
        FROM mytable";
$result = $conn->query($sql);

$properties = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Add a dynamic URL to access the image
        $row['imageUrl'] = 'backend/getImage.php?id=' . $row['id'];
        $properties[] = $row;
    }
}

$conn->close();

// Output JSON response
header('Content-Type: application/json');
echo json_encode($properties);
