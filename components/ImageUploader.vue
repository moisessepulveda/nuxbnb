<template>
  <div>
    <input type="file" accept=".jpg, jpeg, image/jpeg" @change="uploadFile">
  </div>
</template>

<script>
export default {
  name: "ImageUploader",
  methods: {
    async uploadFile(e) {
      const file = e.target.files[0]
      if(!file) return
      const fileName = file.name.split('.').slice(0,-1).join(',') + Date().now()
      const options = {
        timestamp: Date.now(),
      }

    }
  }
}
</script>

<style scoped>

</style>