<template>
  <div class="app">
    <header style="background-color: #eee" class="app-header">
      <div class="app-logo">
        <img src="/images/logo.svg" alt="logo">
      </div>
      <div class="app-search">
        <input type="text" ref="citySearch" @changed="changed" placeholder="Ingresa la ciudad">
        <input type="text" class="datepicker" placeholder="ida">
        <input type="text" class="datepicker" placeholder="vuelta">
        <button>
          <img src="/images/icons/search.svg" alt="busqueda">
        </button>
      </div>

      <div class="app-user-menu">
        <template v-if="isLoggedIn">
          <img src="/images/icons/house.svg" alt="home">
          <div class="name">host</div>
          <img :src="user.profileUrl" class="avatar" alt="avatar">
        </template>
        <div v-show="!isLoggedIn" id="googleButton" class="ml-8"></div>
      </div>

    </header>
    <br>
    <nuxt/>
  </div>
</template>

<script>
export default {
  created() {
    // console.log("created: ", this.$config.test1, this.$config.test2)
  },
  mounted() {
    this.$maps.makeAutoComplete(this.$refs.citySearch)
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn
    }
  },
  methods: {
    changed(event) {
      const place = event.detail
      if (!place.geometry) return

      this.$router.push({
        name: "search",
        query: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          label: this.$refs.citySearch.value,
        }
      })

    }
  }
}
</script>
