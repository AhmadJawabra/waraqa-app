<template>
  <span class="icon-container">
    <fa :icon="iconName" :size="iconSize" />
  </span>
</template>

<script>
export default {
  name: "CustomIcon",
  props: ['iconName', 'iconSize']
}
</script>

<style scoped>

</style>