<?php
require_once('userbase.php');

// Check user authentication
if (isset($_COOKIE['id']) && isset($_COOKIE['sess'])) {
    $Controller = new Controller();
    if ($Controller->checkUserStatus($_COOKIE['id'], $_COOKIE['sess'])) {
        echo json_encode(['authenticated' => true]);
    } else {
        http_response_code(401); // Unauthorized
        echo json_encode(['authenticated' => false, 'error' => 'Invalid session']);
    }
} else {
    http_response_code(401); // Unauthorized
    echo json_encode(['authenticated' => false, 'error' => 'Missing cookies']);
}
exit();
?>
