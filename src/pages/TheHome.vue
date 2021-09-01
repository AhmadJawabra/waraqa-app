<template>
  <the-navbar />
  <the-banner />
</template>

<script>
import TheNavbar from '../layout/TheNavbar';
import TheBanner from "../layout/TheBanner";
export default {
  name: "TheHome",
  components: {
    TheBanner,
    TheNavbar
  }
}
</script>

<style scoped>

</style>