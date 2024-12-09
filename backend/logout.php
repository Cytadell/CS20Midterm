<?php
ob_start(); // Start output buffering

// End the session by clearing cookies
setcookie('id', '', time() - 60 * 60 * 24 * 30, '/'); 
setcookie('sess', '', time() - 60 * 60 * 24 * 30, '/');

// Include the header
include 'partials/header.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logged Out</title>
    <link rel="stylesheet" href="/frontend/css/style.css">
    <style>
        .logout-container {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #ffffff;
            padding: 40px 30px;
            border-radius: 15px;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 90%;
            margin: 20px auto;
        }

        .logout-container h1 {
            font-size: 2.5em;
            color: #333333;
            margin-bottom: 20px;
        }

        .logout-container p {
            font-size: 1.2em;
            color: #555555;
            margin-bottom: 30px;
        }

        .logout-container .btn {
            display: inline-block;
            margin: 10px 15px;
            padding: 12px 25px;
            font-size: 1em;
            color: white;
            background-color: #4285F4;
            border: none;
            border-radius: 8px;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
        }

        .logout-container .btn:hover {
            background-color: #3367D6;
            transform: translateY(-2px);
        }

        .logout-container .btn:active {
            transform: translateY(0px);
        }

        @media (max-width: 600px) {
            .logout-container h1 {
                font-size: 2em;
            }

            .logout-container p {
                font-size: 1em;
            }

            .logout-container .btn {
                padding: 10px 20px;
                font-size: 0.9em;
            }
        }
    </style>
</head>
<body>
    <div class="logout-container">
        <h1>You have successfully logged out</h1>
        <p>Thank you for visiting. Click below to log in again or return to the homepage.</p>
        <a href="login.php" class="btn">Log In</a>
        <a href="index.html" class="btn">Go to Homepage</a>
    </div>
</body>
</html>
<?php
ob_end_flush(); // Flush the output buffer
?>