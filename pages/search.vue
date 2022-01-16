<template>
  <div class="app-search-results-page">
    <div class="app-search-results">
      <div class="app-search-results-listing">
        <h2 class="app-title">Quedate en {{ label }}</h2>
        <nuxt-link v-for="home in homes"
                   :to="`/home/${home.objectID}`"
                   :key="home.objectID">
          <home-row class="app-house"
                    :home="home"
                    @mouseover.native="highlightMarker(home.objectID, true)"
                    @mouseout.native="highlightMarker(home.objectID, false)"/>
        </nuxt-link>
      </div>
      <div class="app-search-results-map">
        <div class="app-map" ref="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeRow from '../components/HomeRow.vue'

export default {
  head() {
    return {
      title: `Casas cerca ${this.label}`
    }
  },
  components: {HomeRow},
  methods: {
    highlightMarker(homeId, isHighLighted) {
      document.getElementsByClassName(`home-${homeId}`)[0]
          ?.classList
          ?.toggle('marker-highlight', isHighLighted)
    },
    updateMap() {
      this.$maps.showMap(this.$refs.map, this.lat,
          this.lng, this.getHomeMarkers())
    },
    getHomeMarkers() {
      if(this.homes.length === 0) return null
      return this.homes.map((h) => {
        return {
          ...h._geoloc,
          pricePerNight: h.pricePerNight,
          id: h.objectID,
        }
      })
    }
  },
  mounted() {
    this.updateMap()
  },
  async beforeRouteUpdate(to, from, next) {
    const data = await this.$dataApi.getHomeByLocation(to.query.lat, to.query.lng)
    this.homes = data.data.hits
    this.label = to.query.label
    this.lat = to.query.lat
    this.lng = to.query.lng
    this.updateMap()
    next()
  },
  async asyncData({query, $dataApi}) {
    const data = await $dataApi.getHomeByLocation(query.lat, query.lng)

    return {
      homes: data.data.hits,
      label: query.label,
      lat: query.lat,
      lng: query.lng,
    }
  }
}
</script>

<style>
.marker {
  background-color: white;
  border: 1px solid lightgray;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 8px;
}

.marker-highlight {
  color: white !important;
  background-color: black;
  border-color: black;
}
</style>
