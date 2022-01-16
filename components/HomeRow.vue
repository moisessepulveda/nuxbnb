<template>
  <div style="clear: left">
    <img :src="home.images[0]" style="width:200px; float:left; padding: 10px"><br>
    {{ home.title }}
    {{ home.location.address }} {{ home.location.city }} {{ home.location.state }} <br>
    {{ pluralize(home.guests, 'invitado') }} / {{ pluralize(home.bedrooms, 'pieza') }} /
    {{ pluralize(home.bathrooms, 'baño') }} <br>
    {{ home.pricePerNight }} / night <br>
    <img src="/images/star.svg" alt="" width="20"> {{ home.reviewCount }} <br>
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
  }
}
</script>
