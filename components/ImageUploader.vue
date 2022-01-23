<template>
  <div>
    <input type="file" accept=".jpg, jpeg, image/jpeg" @change="uploadFile">
  </div>
</template>

<script>
import {unWrap} from "~/utils/fetchUtils";

export default {
  name: "ImageUploader",
  methods: {
    async uploadFile(e) {
      const file = e.target.files[0]
      if(!file) return
      const fileName = file.name.split('.').slice(0,-1).join(',') + Date.now()
      const options = {
        timestamp: Date.now(),
        public_id: fileName,
      }

      const response = await unWrap(this.$axios.post('/api/cloudinary/signature',
          options, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }))

      const signature = response.json.signature
      console.log(signature);

    }
  }
}
</script>

<style scoped>

</style>