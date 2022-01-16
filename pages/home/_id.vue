<template>
  <div class="app-container">
    <property-gallery :images="home.images"/>

    <property-details :home="home"/>

    <property-description :home="home"/>

    <property-map :home="home"/>

    <property-reviews :reviews="reviews" />

    <property-host :user="user" />

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.home.title,
    }
  },
  data() {
  },
  mounted() {

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
  }
}
</script>
