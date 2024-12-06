<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$conn = new mysqli('localhost', 'ug98aliywitj2', 'zt9qdwgsmdo5', 'db6madmwhxsmg0');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, title, address, type, price, distance, imageUrl, datePosted, phone, campus, perBedroomPrice, pricingType, buildingType, beds, baths, utilities, laundry, furnished, transport, pet, wifi FROM mytable";
$result = $conn->query($sql);

$properties = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $properties[] = $row; 
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($properties);
?>
