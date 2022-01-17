<template>
  <div class="app-wrapper">
      <div class="app-double-column app-property-details">
        <div>
          <h1>{{ home.title }}</h1>
          <div class="app-flex">
            <div class="app-address">
              {{ home.location.address }} {{ home.location.city }} {{ home.location.country }}
            </div>
            <div class="app-rating">
              {{ home.reviewValue }} <span>{{home.reviewCount }}</span>
            </div>
          </div>
          <div class="app-property-details-footer">
            {{ pluralize(home.guests, 'persona') }} &middot; {{ pluralize(home.bedrooms, 'pieza') }} &middot;
            {{ pluralize(home.bathrooms, 'baño') }}
          </div>
        </div>
        <div>
          <div class="app-price">
            ${{home.pricePerNight}} <span>/ noche</span>
          </div>
          <div class="app-search">
            <input type="text" class="datepicker" placeholder="ida">
            <input type="text" class="datepicker" placeholder="vuelta">
          </div>
          <button class="app-big-button">Solicitar reserva</button>
        </div>


        <div></div>
      </div>
  </div>
</template>
<script>
import pluralize from "~/utils/pluralize";
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
