<?php

namespace App;
use App\Rocket;
use App\Authenticator;

class Controller {
  private $request;

  function __construct($request) {
    $this->request = $request;
  }

  function authenticateRequest() {
    $authenticator = new Authenticator();
    return $authenticator->authenticateToken($this->request);
  }

  function handleRequest() {
    if (!$this->authenticateRequest()) {
      $this->sendUnauthorizedError();
      return;
    }

    switch ($this->request['REQUEST_METHOD']) {
      case 'GET': {
        $this->handleGetRequest();
        break;
      }
    
      default: {
        $this->sendNotFoundError();
        break;
      }
    }
  }

  function sendServerError($e) {
    header($this->request['SERVER_PROTOCOL'] . ' 500 Internal Server Error');
    $response = [
      'status' => 500,
      'data' => $e->getMessage()
    ];
    
    echo json_encode($response);
  }

  function sendUnauthorizedError() {
    header($this->request['SERVER_PROTOCOL'] . ' 401 Unauthorized');
    $response = [
      'status' => 401,
      'data' => null
    ];
    
    echo json_encode($response);
  }

  function sendNotFoundError() {
    header($this->request['SERVER_PROTOCOL'] . ' 404 Not Found');
    $response = [
      'status' => 404,
      'data' => null
    ];
    
    echo json_encode($response);
  }

  function sendResponse($data) {
    header($this->request['SERVER_PROTOCOL'] . 'HTTP/1.1 200 OK');
    $response = [
      'status' => 200,
      'data' => $data
    ];

    echo json_encode($response);
  }

  function handleGetRequest() {
    try {
      $rocket = new Rocket();
      $response_data = $rocket->getList();
      $this->sendResponse($response_data);
    } catch (Exception $e) {
      $this->sendServerError($e);
    }
  }
} 

?>
