<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Include necessary files
require_once 'config.php'; // Google API config
require_once 'user_auth_control.php'; // Include Controller class

// Initialize the Controller class
$Controller = new Controller();

// Check if the user is logged in
if (!isset($_COOKIE['id']) || !isset($_COOKIE['sess']) || !$Controller->checkUserStatus($_COOKIE['id'], $_COOKIE['sess'])) {
    // Redirect to the login page if not logged in
    header('Location: navibar.php');
    exit();
}

// Fetch the user's information
$userId = intval($_COOKIE['id']);
$userData = $Controller->fetchUserData($userId); // A new method to fetch user data
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="logo">
            <a href="index.php">
                <img src="img/logo.png" alt="Company Logo">
            </a>
        </div>
        <h1>Welcome to Your Dashboard, <?php echo htmlspecialchars($userData['name']); ?>!</h1>
        <nav class="navbar">
            <div class="normLinks">
                <a href="index.php">Home</a>
                <a href="listings.php">Our Houses</a>
                <a href="FAQ.php">FAQs</a>
                <a href="contactus.php">Contact Us</a>
                <a href="logout.php" class="auth">Log Out</a>
            </div>
        </nav>
    </header>

    <main>
        <h2>Your Profile Information</h2>
        <div class="profile">
            <img src="<?php echo htmlspecialchars($userData['avatar']); ?>" alt="Profile Picture" class="profile-picture">
            <p><strong>Name:</strong> <?php echo htmlspecialchars($userData['name'] . ' ' . $userData['surname']); ?></p>
            <p><strong>Email:</strong> <?php echo htmlspecialchars($userData['email']); ?></p>
        </div>
    </main>
</body>
</html>
