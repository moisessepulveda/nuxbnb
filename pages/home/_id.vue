<template>
  <div>
    <div style="display:flex">
      <img v-for="image in home.images" :key="image" :src="image" width="200" height="150" alt="something ">
    </div>
    {{ home.title }} <br>
    {{ home.pricePerNight }} / por noche <br>
    <img src="/images/marker.svg" alt="" width="20" height="20">
    {{ home.location.address }} {{ home.location.city }} {{ home.location.country }} <br>
    <img src="/images/star.svg" alt="" width="20" height="20">
    {{ home.reviewValue }} <br>
    {{ home.guests }} invitados, {{ home.bedrooms }} habitaciones, {{ home.bathrooms }} baños <br>
    <div style="width:800px; height:800px" ref="map"></div>
    <div v-for="review in reviews" :key="review.objectID">
      <img :src="review.reviewer.image" :alt="review.objectID">
      <p>{{ review.reviewer.name }}</p> <br>
      <p>{{ formatDate(review.date) }}</p>
      <short-text :text="review.comment" :target="150"></short-text>
      <br>
      <p>{{ review.rating }}</p><br>
    </div>
    <div>
      <img :src="user.image" alt="user_image"><br>
      {{ user.name }} <br>
      {{ formatDate(user.joined) }} <br>
      {{ user.reviewCount }} <br>
      {{ user.description }} <br>
    </div>
  </div>
</template>

<script>
import homes from '~/data/homes.json'

export default {
  layout: 'red',
  head() {
    return {
      title: this.home.title,
    }
  },
  data() {
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat,
        this.home._geoloc.lng)
  },
  async asyncData({params, $dataApi, error}) {
    const responses = await Promise.all([
      $dataApi.getHome(params.id),
      $dataApi.getReviewsByHomeId(params.id),
      $dataApi.getUsersByHomeId(params.id),
    ])

    const badResponse = responses.find((r) => r.status !== 200)
    if (badResponse) return error({statusCode: badResponse.status, message: badResponse.status})


    return {
      home: responses[0].data,
      reviews: responses[1].data.hits,
      user: responses[2].data.hits[0]
    }
  },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr)
      return date.toLocaleDateString(undefined, {month: 'long', 'year': 'numeric'})
    }
  }
}
</script>
