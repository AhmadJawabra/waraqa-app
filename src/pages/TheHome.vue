<template>
  <the-navbar />
  <the-banner />
  <the-employee />
  <why-us />
</template>

<script>
import TheNavbar from '../layout/TheNavbar';
import TheBanner from "../layout/TheBanner";
import TheEmployee from "../layout/TheEmployee";
import WhyUs from "../layout/WhyUs";
export default {
  name: "TheHome",
  components: {
    WhyUs,
    TheEmployee,
    TheBanner,
    TheNavbar
  }
}
</script>

<style scoped>

</style>