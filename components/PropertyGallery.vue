<template>
    <div class="app-section">
      <div class="app-wrapper">
        <div class="app-masonry">
          <div v-for="image in images"
               :style="`background-image: url(${image})`"
               :key="image"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>
