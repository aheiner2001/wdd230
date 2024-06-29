<?php
// Start the session
session_start();

// Check if the user is logged in
if (isset($_SESSION['username'])) {
    echo "Welcome, " . $_SESSION['username'] . "!";
    // Display user-specific content here
} else {
    // Redirect to the login page
    header('Location: login.html');
    exit();
}
?>
