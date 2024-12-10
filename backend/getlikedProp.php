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

// Get user ID (from session or Google login)
$userId = $_COOKIE['id'] ?? 6;

if (!$userId) {
    echo json_encode(['error' => 'User not authenticated']);
    exit();
}

// Fetch liked property IDs
$sql = "SELECT property_id FROM likedProp WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $userId);
$stmt->execute();
$result = $stmt->get_result();

$likedProperties = [];
while ($row = $result->fetch_assoc()) {
    $likedProperties[] = $row['property_id'];
}

echo json_encode($likedProperties);

$stmt->close();
$conn->close();
?>
