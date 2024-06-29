<?php
// Start the session
session_start();

// Connect to the database
$db = new mysqli('localhost', 'your_username', 'your_password', 'your_database');

// Check for a form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve the username and password from the form
    $username = $db->real_escape_string($_POST['username']);
    $password = $_POST['password'];

    // Find the user in the database
    $query = "SELECT * FROM users WHERE username = '$username'";
    $result = $db->query($query);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Set the session variable
            $_SESSION['username'] = $username;
            echo "Login successful!";
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "User not found.";
    }
}
?>
