<?php

require_once('Conexion.php');
require_once('cors.php');
require_once('Controller.php');

$methodHTTP = $_SERVER['REQUEST_METHOD'];

switch ($methodHTTP) {

  case 'GET':
    $data = $_GET;
    $ctl = new Controller();
    $result = $ctl->getProducts($data);
    echo json_encode(["products" => $result]);
    break;
  case 'POST':
    $data = $_POST;
    $ctl = new Controller();
    $result = $ctl->addProduct($data);
    echo json_encode(["products" => $result]);
    break;

  case 'DELETE':
    $data = $_GET;
    $ctl = new Controller();
    $result = $ctl->deleteProduct($data);
    echo json_encode(["products" => $result]);
    break;
    case 'PUT':
      $data = $_GET;

};
