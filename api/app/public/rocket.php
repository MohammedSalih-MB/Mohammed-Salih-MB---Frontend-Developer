<?php

namespace App;

class Rocket {
  function getList() {
    $api_url = 'https://api.spacexdata.com/v3/rockets';
    $json_data = file_get_contents($api_url);
    return json_decode($json_data);
  }
}

?>
