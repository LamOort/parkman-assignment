<template>
  <section class="pkmn-custom-section">
    <div class="pkmn-custom-section__wrapper">
      <div id="map"></div>
      <div class="pkmn-custom-section__info">
        <div class="pkmn-custom-section__info--title">
          Want to share your vision with ParkMan?
        </div>

        <div class="pkmn-custom-section__info--desc">
          Give us a visit at our HQ, coffee is on us!
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { onMounted } from "vue";

export default {
  components: {},
  setup() {
    onMounted(() => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoidGhlb2Rkb25lMDgxMSIsImEiOiJja3IwbTVqcGExdG9pMnZxcDgzejRhZGFkIn0.9TqRySdyey7evVlTLWllbA";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/theoddone0811/ckr0ox3vf1vx917pkunmee4kq",
        center: [24.901852938788956, 60.16605084387276],
        zoom: 12,
        doubleClickZoom: false,
      });

      map.on("load", () => {
        map.addSource("places", {
          // This GeoJSON contains features that include an "icon"
          // property. The value of the "icon" property corresponds
          // to an image in the Mapbox Streets style's sprite.
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "feature",
                properties: {
                  description:
                    "<strong>ParkMan is here!</strong><p>Energiakatu 4, 00180 Helsinki</p>",
                  icon: "mapbox-marker-icon-green",
                },
                geometry: {
                  type: "Point",
                  coordinates: [24.901852938788956, 60.16605084387276],
                },
              },
            ],
          },
        });

        // Add a layer showing the places.
        map.addLayer({
          id: "places",
          type: "symbol",
          source: "places",
          layout: {
            "icon-image": "{icon}",
            "icon-allow-overlap": true,
          },
        });

        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        map.on("click", "places", function (e) {
          var coordinates = e.features[0].geometry.coordinates.slice();
          var description = e.features[0].properties.description;

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on("mouseenter", "places", function () {
          map.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        map.on("mouseleave", "places", function () {
          map.getCanvas().style.cursor = "";
        });
      });
    });

    return {};
  },
};
</script>

<style lang="scss">
@import "./CustomSection.scss";

#map {
  height: 600px;
  width: 100vw;

  /** TABLET */
  @media (min-width: 768px) and (max-width: 1439px) {
    height: 400px;
  }

  /** MOBILE */
  @media (max-width: 767px) {
    height: 300px;
  }
}

.mapboxgl-popup {
  font-family: var(--pkmn-font-family);
  user-select: none;
}

.mapboxgl-popup-close-button {
  display: none;
}
</style>
