<template>
  <div style="text-align: center">
    <img src="https://media1.tenor.com/images/99f00b32545bf5b5db8bf8ecbb7f0aec/tenor.gif?itemid=7971019" alt="error">
    <div>{{error.message}} {{error.statusCode}} </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Estas en problemas"
    }
  },
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
