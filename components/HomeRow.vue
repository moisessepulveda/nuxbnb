<template>
  <div>
    <div class="app-house-header" :style="`background-image: url(${home.images[0]})`"></div>
    <div class="app-house-body">
      <img src="/images/icons/heart.svg" alt="heart" class="app-fav">
      <h2>{{home.title}}</h2>
      <div class="app-address">
        {{ home.location.address }} {{ home.location.city }} {{ home.location.state }} <br>
      </div>
      <div class="app-amenities">
        <p>
          {{ pluralize(home.guests, 'invitado') }} / {{ pluralize(home.bedrooms, 'pieza') }} /
          {{ pluralize(home.bathrooms, 'baño') }} <br>
        </p>
        <p>{{ features }}</p>
      </div>
      <div class="app-flex">
        <div class="app-rating">
          {{ home.reviewValue }}
        </div>
        <div class="app-price">
          ${{ home.pricePerNight }} <span>/ noche</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pluralize from "~/components/utils/pluralize";

export default {
  props: {
    home: {
      type: Object,
      required: true
    }
  },
  methods: {
    pluralize
  },
  computed: {
    features() {
      return this.home.features.slice(0, 3).join(",")
    }
  }
}
</script>
