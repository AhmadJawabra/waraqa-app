<template>
  <the-navbar />
  <the-banner />
  <the-employee />
</template>

<script>
import TheNavbar from '../layout/TheNavbar';
import TheBanner from "../layout/TheBanner";
import TheEmployee from "../layout/TheEmployee";
export default {
  name: "TheHome",
  components: {
    TheEmployee,
    TheBanner,
    TheNavbar
  }
}
</script>

<style scoped>

</style>