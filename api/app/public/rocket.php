<?php

namespace App;

class Rocket {
  function formatItems($items) {
    return array_map(
      function ($item) {
        return [
          'id' => $item->id,
          'name' => $item->name,
          'country' => $item->country,
          'description' => $item->description,
          'company' => $item->company,
          'active' => $item->active,
          'type' => $item->type,
          'image' => (
            $item->flickr_images && $item->flickr_images[0]
              ? $item->flickr_images[0]
              : ''
          )
        ];
      },
      $items
    );
  }

  function getList() {
    $api_url = 'https://api.spacexdata.com/v4/rockets';
    $json_data = file_get_contents($api_url);
    $rockets = $this->formatItems(json_decode($json_data));
    return $rockets;
  }
}

?>
