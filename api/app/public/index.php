<?php
require_once "vendor/autoload.php";
require_once "controller.php";
require_once "rocket.php";

use App\Controller;

$controller = new Controller($_SERVER);
$controller->handleRequest();

?>
