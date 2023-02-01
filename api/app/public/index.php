<?php
require_once "../../vendor/autoload.php";

use App\Controller;

$controller = new Controller($_SERVER);
$controller->handleRequest();

?>
