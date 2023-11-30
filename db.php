<?php
require 'vendor/autoload.php';

use MongoDB\Client;

$mongoClient = new Client("mongodb://localhost:27017");
$database = $mongoClient->selectDatabase('registration');
$collection = $database->selectCollection('users');
?>
