

<?php
// Check Request Method:
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
}

// Sanitize Input:
$name = strip_tags(trim($_POST["name"]));
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"]);

// Validate Input:
if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {

    echo "Oops! There was a problem with your submission. Please complete the form and try again.";
    exit;
}

// Prepare Email Content:
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";


// Define File Path:
$file_path = '/Users/aaronheiner/Documents/BYUI SPRING 2024/serverside/uploads/mail.out';

// Write to File:
if (file_put_contents($file_path, $email_content, FILE_APPEND | LOCK_EX)) {
  
    // Response Codes:
    http_response_code(200);
  
} else {
    // Handle Non-POST Requests:
    http_response_code(500);
 
}

// If the request method is not POST, handle it:
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
   
}
?>
