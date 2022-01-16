<template>
  <div>
    <div>
      <div class="app-wrapper app-padded-vertical">
        <h2 class="app-subtitle">Ubicación</h2>
        <p class="app-description">
          {{ home.location.address }}
          {{ home.location.city }}
          {{ home.location.state }}
          {{ home.location.country }}
        </p>
        <div class="app-map" ref="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyMap",
  props: {
    home: {
      type: Object,
      required: true
    },

  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat,
        this.home._geoloc.lng)
  }
}
</script>

<style scoped>

</style>
