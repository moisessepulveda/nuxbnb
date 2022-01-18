<template>
  <div>
    <div>Listado de casas</div>
    <br>
    <h2 class="text-xl bold">Agrega una nueva casa</h2>

    <form action="" class="form" @submit.prevent="onSubmit" enctype="application/x-www-form-urlencoded">
      image: <br>
      <input type="text" class="w-3/4" v-model="home.images[0]">
      <input type="text" class="w-3/4" v-model="home.images[1]">
      <input type="text" class="w-3/4" v-model="home.images[2]">
      <input type="text" class="w-3/4" v-model="home.images[3]">
      <input type="text" class="w-3/4" v-model="home.images[4]">
      <br>
      Title: <br>
      <input type="text" name="" id="" v-model="home.title" class="w-60">
      <br>
      Descripción <br>
      <textarea cols="30" rows="10" v-model="home.description" class="w-104"></textarea><br>
      Nota: <br>
      <textarea cols="30" rows="10" v-model="home.note" class="w-104"></textarea>
      <br>
      Feature: <br>
      <input type="text" v-model="home.features[0]" class="w-26">
      <input type="text" v-model="home.features[1]" class="w-26">
      <input type="text" v-model="home.features[2]" class="w-26">
      <input type="text" v-model="home.features[3]" class="w-26">
      <input type="text" v-model="home.features[4]" class="w-26">
      <br>
      Precio por noche:
      <input type="number" v-model="home.pricePerNight" class="w-26">
      <br>
      Invitados: <br>
      <input type="number" v-model="home.guests" class="w-26">
      <br>
      Habitaciones: <br>
      <input type="number" v-model="home.bedrooms" class="w-26">
      <br>
      Baños: <br>
      <input type="number" v-model="home.bathrooms" class="w-26">
      <br>
      <input type="text" ref="locationSelector"
             @changed="changed"
             autocomplete="off" placeholder="Selecciona la dirección">
      <br>
      Dirección: <input type="text" v-model="home.location.address" class="w-60"><br>
      Ciudad: <input type="text" v-model="home.location.city" class="w-60"><br>
      Estado: <input type="text" v-model="home.location.state" class="w-60"><br>
      Código postal: <input type="text" v-model="home.location.postalCode" class="w-60"><br>
      País: <input type="text" v-model="home.location.country" class="w-60"><br>
      <button class="border px-4 py-2 border-gray-400">Agregar</button>

    </form>
  </div>
</template>

<script>
export default {
  name: "homes",
  data() {
    return {
      home: {
        title: '',
        description: '',
        pricePerNight: '',
        guests: '',
        note: '',
        bedrooms: '',
        beds: '',
        bathrooms: '',
        features: ['', '', '', '', ''],
        location: {
          address: '',
          city: '',
          state: '',
          postalCode: '',
          country: ''
        },
        _geoloc: {
          lat: 26.1,
          lng: 26.1
        },
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/b/bf/Home_Alone_House.jpg?q=90',
          'https://upload.wikimedia.org/wikipedia/commons/b/bf/Home_Alone_House.jpg?q=3',
          'https://upload.wikimedia.org/wikipedia/commons/b/bf/Home_Alone_House.jpg?q=4',
          'https://upload.wikimedia.org/wikipedia/commons/b/bf/Home_Alone_House.jpg?q=5',
          'https://upload.wikimedia.org/wikipedia/commons/b/bf/Home_Alone_House.jpg?q=1'
        ]
      }
    }
  },
  mounted() {
    // just for testing
    this.$maps.makeAutoComplete(this.$refs.locationSelector, ['address'])
    this.fillForm()
  },
  methods: {
    changed(event) {
      const addressParts = event.detail.address_components
      console.log(event.detail);
      const street = this.getAddressPart(addressParts, 'street_number')?.short_name || ''
      const route = this.getAddressPart(addressParts, 'route')?.short_name || ''
      this.home.location.address = street + " " + route
      this.home.location.city = this.getAddressPart(addressParts, 'locality')?.short_name || ''
      this.home.location.state = this.getAddressPart(addressParts, 'administrative_area_level_1')?.long_name || ''
      this.home.location.country = this.getAddressPart(addressParts, 'country')?.short_name || ''
      this.home.location.postalCode = this.getAddressPart(addressParts, 'postal_code')?.short_name || ''

      const geo = event.detail.geometry.location
      this.home._geoloc.lat = geo.lat()
      this.home._geoloc.lng = geo.lng()


      console.log(street);
      console.log(addressParts);
    },
    getAddressPart(parts, type) {
      return parts.find(part => part.types.includes(type))
    },
    fillForm() {
      this.home.title = " mi titulo"
      this.home.description = "mi descripcion"
      this.home.note = "my notes"
      this.home.features[0] = "f1"
      this.home.features[1] = "f2"
      this.home.features[2] = "f3"
      this.home.features[3] = "f4"
      this.home.features[4] = "f5"
      this.home.guests = 3
      this.home.bedrooms = 2
      this.home.bathrooms = 1
      this.home.location.city = "vali"
      this.home.location.postalCode = 81500
      this.home.location.state = "colorado"
      this.home.location.country = "US"
      this.home.location.address = "near"
    },
    async onSubmit() {
      await this.$axios.post('/api/homes', this.home, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
    }
  }
}
</script>

<style scoped>
.form input,
.form textarea {
  @apply p-1 m-1 bg-gray-200;
}
</style>