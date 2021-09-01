<template>
  <the-home/>

  <h1>display icon demo</h1>

  <fa icon="coffee" />
  <fa :icon="['fas', 'coffee']" />
  <fa icon="user" />
  <fa icon="dove" />

  <fa :icon="['fab','youtube']" />

  <h1>display icon demo</h1>
</template>

<script>
import TheHome from "./pages/TheHome";
export default {
  name: 'App',
  components: {
    TheHome
  }
}
</script>

<style lang="scss">
</style>
