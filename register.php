<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $gmail = $_POST['gmail'];
    $age = $_POST['age'];
    $contact = $_POST['contact'];
    $DOB = $_POST['DOB'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $user = [
        'username' => $username,
        'gmail' => $gmail,
        'age' => $age,
        'contact' => $contact,
        'DOB' => $DOB,
        'password' => $password,
    ];

    $collection->insertOne($user);
    echo json_encode(['success' => true, 'message' => 'Registration successful']);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?>
