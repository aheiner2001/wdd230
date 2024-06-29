<?php
$servername = "localhost";
$username = "root"; // replace with your MySQL username
$password = "Phatsaxman1*"; // replace with your MySQL password
$dbname = "windowwashing"; // replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
// The SQL statement was missing a closing parenthesis for the fields list
$stmt = $conn->prepare("INSERT INTO customer (customer_name, customer_email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);

// Set parameters and execute
$name = $_POST['name'];
$email = $_POST['email'];
$stmt->execute();

echo "New records created successfully";



$stmt->close();
$conn->close();
?>
