<template>
  <section class="block banner container"
           :style="{ backgroundImage: `url( ${bannerImage} )` }"
  >
    <header class="banner__header text-white">
      <h1 class="mb-2">مرحبا بك في منصه ورقه</h1>
      <p class="mb-2 banner__tagline">المنصه الاكبر في انتاج المحتوى العربي الرقمي في العالم</p>
      <a href="#" class="btn btn--transparent btn--block w-50">اعرف المزيد</a>
    </header>

  </section>
</template>

<script>
import bannerImage from '@/assets/images/banner.png';
export default {
  name: "TheBanner",
  data() {
    return{
      bannerImage
    }
  }
}
</script>

<style scoped>

</style>