<template>
  <the-navbar />
  <the-banner />
  <the-employee />
  <why-us />
  <our-clients />
</template>

<script>
import TheNavbar from '../layout/TheNavbar';
import TheBanner from "../layout/TheBanner";
import TheEmployee from "../layout/TheEmployee";
import WhyUs from "../layout/WhyUs";
import OurClients from "../layout/OurClients";
export default {
  name: "TheHome",
  components: {
    OurClients,
    WhyUs,
    TheEmployee,
    TheBanner,
    TheNavbar
  }
}
</script>

<style scoped>

</style>