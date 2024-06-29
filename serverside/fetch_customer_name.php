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

// SQL query to select the first name
$sql = "SELECT customer_name FROM customer";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        // Assuming the first name is the first part of the customer_name
        $fullName = $row["customer_name"];
        $firstName = explode(" ", $fullName)[0];
        echo "First Name: " . $firstName . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
