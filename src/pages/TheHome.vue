<template>
  <the-navbar />
  <the-banner />
  <the-employee />
  <why-us />
  <our-clients />
  <the-footer />
</template>

<script>
import TheNavbar from '../layout/TheNavbar';
import TheBanner from "../layout/TheBanner";
import TheEmployee from "../layout/TheEmployee";
import WhyUs from "../layout/WhyUs";
import OurClients from "../layout/OurClients";
import TheFooter from "../layout/TheFooter";
export default {
  name: "TheHome",
  components: {
    TheFooter,
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