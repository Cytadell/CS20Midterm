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
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// Function to validate Google API user
function validateGoogleUser() {
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
    echo json_encode(['error' => 'Unauthorized access.']);
    exit();
}

// Validate property ID
$id = $conn->real_escape_string($_POST['property_id']); ?? null; // Assuming the property ID is sent via POST
if (!$id || !is_numeric($id)) {
    echo json_encode(['error' => 'Invalid or missing property ID.']);
    exit();
}

// Insert the property into appliedProp
$listSql = "INSERT INTO appliedProp (user_id, property_id) VALUES (?, ?)";
$listStmt = $conn->prepare($listSql);
if (!$listStmt) {
    echo json_encode(['error' => 'SQL preparation failed: ' . $conn->error]);
    exit();
}

$listStmt->bind_param("ii", $userId, $id);

if ($listStmt->execute()) {
    echo json_encode(['success' => 'Property added successfully and attributed to user!']);
} else {
    echo json_encode(['error' => 'Failed to add property: ' . $listStmt->error]);
}

$listStmt->close();
$conn->close();
?>
