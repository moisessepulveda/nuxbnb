<template>
  <div class="app-padded-vertical">
    <div class="app-wrapper">
      <div class="app-testimonials">
        <div v-for="(review, index) in reviews" :key="index">
          <div class="app-testimonial-header">
            <div><img :src="review.reviewer.image"></div>
            <div>
              <p class="app-testimonial">{{review.reviewer.name}}</p>
              <p class="app-testimonial-date">
                {{ shortDate(review.date)}}
              </p>
            </div>
          </div>
          <div class="app-testimonial-body">
            <short-text :text="review.comment" :target="150"></short-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shortDate from "~/components/utils/shortDate";
export default  {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  methods: {
    shortDate
  }
}
</script>
