<template>
  <the-home/>

  <!--  playground area  -->

  <h1>display icon demo</h1>









  <button class="btn btn--primary">تسجيل</button>
  <button class="btn btn--outline">دخول</button>

  <button class="btn btn--primary btn--block">تسجيل</button>

  <button class="btn btn--transparent">دخول</button>

  <h1>display icon demo</h1>
</template>

<script>
import TheHome from "./pages/TheHome";
import CustomIcon from "./components/shared/CustomIcon"
export default {
  name: 'App',
  components: {
    TheHome,
    CustomIcon
  }
}
</script>

<style lang="scss">
</style>
