<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once('userbase.php'); // Include user authentication logic
header('Content-Type: application/json');

// Database connection
$conn = new mysqli('localhost', 'uvu8gbrv0khs9', '[7g3c{2~Ow@&', 'db6madmwhxsmg0');
if ($conn->connect_error) {
    echo json_encode(['error' => 'Database connection failed']);
    exit();
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
    
    if (!$userId) {
        echo json_encode(['error' => 'User not authenticated: ' + $userId]);
        exit();
}

// Get the type of data to fetch
$type = $_GET['type'] ?? '';
$sql;

if ($type === 'liked') {
    // Fetch liked properties
    $sql = "SELECT property_id FROM likedProp WHERE user_id = ?";
} elseif ($type === 'applied') {
    // Fetch applied properties
    $sql = "SELECT property_id FROM appliedProp WHERE user_id = ?";
} elseif ($type === 'listed') {
        $sql = "SELECT property_id FROM listedProp WHERE user_id = ?";
} else {
    echo json_encode(['error' => 'Invalid type parameter']);
    exit();
}

$stmt = $conn->prepare($sql);
if (!$stmt) {
    echo json_encode(['error' => 'SQL preparation failed: ' . $conn->error]);
    exit();
}

$stmt->bind_param('i', $userId);
$stmt->execute();
$result = $stmt->get_result();

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);

$stmt->close();
$conn->close();
?>
