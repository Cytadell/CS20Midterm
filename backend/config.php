<?php
require_once "google-api/vendor/autoload.php";
$gClient = new Google_Client();
$gClient->setClientId("672337419683-6860q9c9sloe98d5gsk48cle0dm1a101.apps.googleusercontent.com");
$gClient->setClientSecret("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");
$gClient->setApplicationName("JumboSpace Login");
$gClient->setRedirectUri("https://andrejd.sg-host.com/CS20Midterm/backend/controller.php");
$gClient->addScope("email profile openid");

// Login URL
$login_url = $gClient->createAuthUrl();
?>