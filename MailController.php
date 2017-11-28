<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$body = 'Name: ' . $name . "\n" .
        'Email: ' . $email . "\n" .
        'Message: ' . $message . "\n";

mail('joshstobbs@gmail.com', 'A new contact from ' . $name, $body);

echo $_SERVER['REQUEST_METHOD'];
