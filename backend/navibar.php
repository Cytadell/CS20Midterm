<?php
require_once 'config.php'; // Include Google API config
require_once 'user_auth_control.php'; // Include Controller class
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Include Google's Platform Library -->
    <script src="https://accounts.google.com/gsi/client" async defer></script>
</head>
<body>
<header>
        <div class="logo">
            <a href="index.php">
                <img src="img/logo.png" alt="Company Logo">
            </a>
        </div>
        <h1>JumboSpace</h1>
        <nav class="navbar">
            <div class="normLinks">
                <a href="index.php">Home</a>
                <a href="ourteam.php">Our Team</a>
                <a href="listings.php">Our Houses</a>
                <a href="OurHouses.php">Map of Houses</a>
                <a href="FAQ.php">FAQs</a>
                <a href="contactus.php">Contact Us</a>
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <img src="img/menu.png" alt="menu">
                </button>
                <div class="dropdown-content">
                    <a href="index.php">Home</a>
                    <a href="ourteam.php">Our Team</a>
                    <a href="listings.php">Our Houses</a>
                    <a href="OurHouses.php">Map of Houses</a>
                    <a href="FAQ.php">FAQs</a>
                    <a href="contactus.php">Contact Us</a>
                </div>
            </div>

            <!-- Google Sign-In Button -->
            <a href="<?php echo $login_url; ?>" class="auth">Login with Google</a>
        </nav>
</header>
</body>
</html>
