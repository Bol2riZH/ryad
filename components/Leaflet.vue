<template>
  <LMap style="height: 350px" :zoom="250" :center="[7.8829261, 98.2937309]" :use-global-leaflet="false">
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      layer-type="base"
      name="OpenStreetMap"
    />
  </LMap>
</template>

<script setup>
  import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
  import { ref } from 'vue';
  const zoom = ref(6);
</script>
