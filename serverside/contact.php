<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Handle error here
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
    }

    // Prepare the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Define the file path
    $file_path = '/Users/aaronheiner/Documents/BYUI SPRING 2024/serverside/uploads/mail.out';

    // Attempt to write to the file
    if (file_put_contents($file_path, $email_content, FILE_APPEND | LOCK_EX)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been saved.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong, and we couldn't save your message.";
    }
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
