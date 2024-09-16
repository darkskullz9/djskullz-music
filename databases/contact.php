<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO contact(name, email, message) VALUES ('$name', '$email', '$message')";

if($conn->query($sql) === TRUE) {
    echo "New record created successfully";

    $to = 'djskullz.pro@gmail.com';
    $subject = 'New message from' . $name;
    $message_body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email\r\n";

    if(mail($to, $subject, $message_body, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Error sending email";
    }
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>