<template>
   <div>
       <img :src="home.images[0]" style="width:200px"><br>
            {{ home.title }}
            {{ home.location.address }} {{ home.location.city }} {{ home.location.state}} <br>
            {{ home.guests }} invitados<br>
            {{ home.pricePerNight}} / night <br>
   </div>
</template>

<script>

export default {
    props: {
        home: {
            type: Object,
            required: true
        }
    }
}
</script>
