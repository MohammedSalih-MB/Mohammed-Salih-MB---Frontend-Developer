<?php

namespace App;
use JWT;
use Dotenv\Dotenv;
use DateTimeImmutable;
use Firebase\JWT\Key;

$rootDir = __DIR__ . '../..';
$dotenv = Dotenv::createImmutable($rootDir);
$dotenv->safeLoad();

class Authenticator {
  private $secretKey;
  private $clientId = "brainstorm";

  function __construct() {
    $this->secretKey = $_ENV['AUTH_SECRET'];
  }

  function generateToken() {
    $issuedAt = new DateTimeImmutable();
    $username = $this->clientId;
    $data = [
      'iat'  => $issuedAt->getTimestamp(),
      'userName' => $username
    ];

    return JWT::encode(
      $data,
      $this->secretKey,
      'HS512'
    );
  }

  function getAuthorizationHeader($request)
  {
    $headers = null;
    if (isset($request['Authorization'])) {
      $headers = trim($request["Authorization"]);
    } else if (isset($request['HTTP_AUTHORIZATION'])) {
      $headers = trim($request["HTTP_AUTHORIZATION"]);
    } elseif (function_exists('apache_request_headers')) {
      $requestHeaders = apache_request_headers();
      $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
      if (isset($requestHeaders['Authorization'])) {
        $headers = trim($requestHeaders['Authorization']);
      }
    }
    return $headers;
  }

  function getBearerToken($request)
  {
    $headers = $this->getAuthorizationHeader($request);
    if (!empty($headers)) {
      if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
        return $matches[1];
      }
    }
    return null;
  }

  function authenticateToken($request) {
    $token = $this->getBearerToken($request);
    if (!$token) {
      return false;
    }

    $decoded = JWT::decode($token, $this->secretKey, true);
    $payload = json_decode(json_encode($decoded), true);
    return $payload['userName'] == $this->clientId;
  }
}

?>
