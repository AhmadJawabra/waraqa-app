<template>
  <section class="container block">
    <header class="block__header">
      <h2 class="mb-2 text-heading">عملاؤنا</h2>
    </header>
    <div class="grid grid--1x4">
      <div v-for="img in clientsLogo" class="client-wrapper">
        <img :src="img.src" :alt="img.alt">
      </div>
    </div>
  </section>
</template>

<script>

import advisor from '@/assets/images/advisor.svg';
import sotor from "@/assets/images/sotor.svg";
import mawdoo3 from "@/assets/images/mawdoo3.svg"
import life from "@/assets/images/life.svg";
import lifeRed from "@/assets/images/life-red.svg";
import supermama from "@/assets/images/supermama.svg";
import health from "@/assets/images/health.svg";

export default {
  name: "OurClients",
  data() {
    return {
      clientsLogo: [
          { src: advisor, alt: 'advisor logo' },
          { src: sotor, alt: 'sotor logo' },
          { src: mawdoo3, alt: 'mawdoo3 logo' },
          { src: life, alt: 'life logo' },
          { src: lifeRed, alt: 'life logo' },
          { src: supermama, alt: 'supermama logo' },
          { src: health, alt: 'health logo' },
          { src: advisor, alt: 'advisor logo' },
      ]
    }
  }
}
</script>

<style scoped>

</style>