<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Expires: Sat, 01 Jan 2000 00:00:00 GMT");

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once('userbase.php'); // Ensure this has your Controller class for user checks

// Database connection
$conn = new mysqli('localhost', 'uvu8gbrv0khs9', '[7g3c{2~Ow@&', 'db6madmwhxsmg0');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to validate Google API user
function validateGoogleUser() {
    // Simulate Google API login verification logic (replace this with actual Google API validation)
    if (isset($_COOKIE['google_id'])) {
        return intval($_COOKIE['google_id']); // Return the Google user ID from the cookie
    }
    return null;
}

// Check user authentication (either from your app or Google API)
$userId = null;

if (isset($_COOKIE['id']) && isset($_COOKIE['sess'])) {
    $Controller = new Controller();
    if ($Controller->checkUserStatus($_COOKIE['id'], $_COOKIE['sess'])) {
        $userId = intval($_COOKIE['id']); // Get user ID from your system
    }
} else {
    // Check Google API login if local authentication failed
    $userId = validateGoogleUser();
}

// If no user ID is found, deny access
if (!$userId) {
    header('Location: login.php?error=unauthorized');
    exit();
}

// Process the submitted form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id;
    do {
        $id = mt_rand(1000, 9999); // Generate a random ID
        $checkSql = "SELECT SQL_NO_CACHE COUNT(*) FROM mytable WHERE id = ?";
        $stmt = $conn->prepare($checkSql);
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $stmt->bind_result($count);
        $stmt->fetch();
        $stmt->close(); // Free resources
    } while ($count > 0);

    // Sanitize input data
    $landtitle = $conn->real_escape_string($_POST['landtitle']);
    $address = $conn->real_escape_string($_POST['address']);
    $price = '$' . floatval($_POST['price']);
    $type = $conn->real_escape_string($_POST['type']);
    $distance = floatval($_POST['distance']) . ' miles to ' . $conn->real_escape_string($_POST['campus']);
    $datePosted = "Today";
    $campus = $conn->real_escape_string($_POST['campus']);
    $perBedCost = '$' . (floatval($_POST['price']) / intval($_POST['bed']));
    $pricetype = $conn->real_escape_string($_POST['pricetype']);
    $buildtype = $conn->real_escape_string($_POST['buildtype']);
    $bed = intval($_POST['bed']);
    $bath = floatval($_POST['bath']);
    $wifi = $conn->real_escape_string($_POST['wifi']);
    $utilities = $conn->real_escape_string($_POST['utilities']);
    $laundry = $conn->real_escape_string($_POST['laundry']);
    $furnished = $conn->real_escape_string($_POST['furnished']);
    $pet = $conn->real_escape_string($_POST['pet']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $transport = "Near a Train";

    $imageBinary = null;
    $imageName = null;
    $imageType = null;

    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $imageName = basename($_FILES['image']['name']); // Get the original filename
        $imageType = mime_content_type($_FILES['image']['tmp_name']); // Get MIME type
        $imageBinary = file_get_contents($_FILES['image']['tmp_name']); // Get binary data
    }

    // Insert the data into the database
    $sql = "INSERT INTO `mytable` 
        (`id`, `title`, `address`, `type`, `price`, `distance`, `imageUrl`, `imageType`, `image`, `datePosted`, `phone`, `campus`, `perBedroomPrice`, `pricingType`, `buildingType`, `beds`, `baths`, `utilities`, `laundry`, `furnished`, `transport`, `pet`, `wifi`) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        "isssssssbssssssssssssss", 
        $id, $landtitle, $address, $type, $price, $distance, $imageName, $imageType, $imageBinary,
        $datePosted, $phone, $campus, $perBedCost,
        $pricetype, $buildtype, $bed, $bath, $utilities, $laundry, $furnished, $transport,
        $pet, $wifi
    );

    $stmt->send_long_data(8, $imageBinary);

    if ($stmt->execute()) {
        // Insert the property into listedProp
        $listSql = "INSERT INTO listedProp (user_id, property_id) VALUES (?, ?)";
        $listStmt = $conn->prepare($listSql);
        $listStmt->bind_param("ii", $userId, $id);
        if ($listStmt->execute()) {
            echo "Property added successfully and attributed to user!";
        } else {
            echo "Error adding to listedProp: " . $listStmt->error;
        }
        $listStmt->close();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
