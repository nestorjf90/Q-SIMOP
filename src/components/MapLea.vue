<template>
  <q-page>
    <div id="map" style="height: 500px"></div>
  </q-page>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default {
  name: 'MapComponent',
  props: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    // Inicializa el mapa
    const map = L.map('map').setView([this.lat, this.lng], 13);
    const blueIcon = L.icon({
      iconUrl: 'marker-icon.png',
      iconSize: [38, 55], // size of the icon
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    // Añade una capa de mapa (en este caso OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Añade un marcador en la posición especificada
    L.marker([this.lat, this.lng], { icon: blueIcon })
      .addTo(map)
      .bindPopup('Punto proporcionado')
      .openPopup();
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
