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

// Process the submitted form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input data
    $title = $conn->real_escape_string($_POST['title']);
    $address = $conn->real_escape_string($_POST['address']);
    $type = $conn->real_escape_string($_POST['type']);
    $price = $conn->real_escape_string($_POST['price']);
    $distance = $conn->real_escape_string($_POST['distance']);
    $datePosted = $conn->real_escape_string($_POST['datePosted']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $campus = $conn->real_escape_string($_POST['campus']);
    $perBedroomPrice = (float)$_POST['perBedroomPrice'];
    $pricingType = $conn->real_escape_string($_POST['pricingType']);
    $buildingType = $conn->real_escape_string($_POST['buildingType']);
    $beds = $conn->real_escape_string($_POST['beds']);
    $baths = $conn->real_escape_string($_POST['baths']);
    $utilities = $conn->real_escape_string($_POST['utilities']);
    $laundry = $conn->real_escape_string($_POST['laundry']);
    $furnished = $conn->real_escape_string($_POST['furnished']);
    $transport = $conn->real_escape_string($_POST['transport']);
    $pet = $conn->real_escape_string($_POST['pet']);
    $wifi = $conn->real_escape_string($_POST['wifi']);

    // Process the uploaded image
    $imageData = null;
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $imageData = file_get_contents($_FILES['image']['tmp_name']);
    }

    // Insert the data into the database
    $sql = "INSERT INTO mytable 
            (title, address, type, price, distance, datePosted, phone, campus, perBedroomPrice, pricingType, 
             buildingType, beds, baths, utilities, laundry, furnished, transport, pet, wifi, image) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        'ssssssssdsdsssssssssb', 
        $title, $address, $type, $price, $distance, $datePosted, $phone, $campus, 
        $perBedroomPrice, $pricingType, $buildingType, $beds, $baths, $utilities, $laundry, 
        $furnished, $transport, $pet, $wifi, $imageData
    );

    if ($stmt->execute()) {
        echo "Property added successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
