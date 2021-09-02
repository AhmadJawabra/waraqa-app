<template>
  <the-home/>
</template>

<script>
import TheHome from "./pages/TheHome";
import CustomIcon from "./components/shared/CustomIcon";

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: {
    TheHome,
    CustomIcon
  },
  mounted() {
    AOS.init()
  }
}
</script>

<style lang="scss">
</style>
