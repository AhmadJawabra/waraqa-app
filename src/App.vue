<template>
  <the-home/>

  <!--  playground area  -->

  <h1>display icon demo</h1>

  <CustomIcon
      iconName="search"
      iconSize="4x"
  />
  <CustomIcon
      iconName="edit"
      iconSize="4x"
  />
  <CustomIcon
      iconName="lightbulb"
      iconSize="4x"
  />
  <CustomIcon
      iconName="file-alt"
      iconSize="4x"
  />
  <CustomIcon
      iconName="tags"
      iconSize="4x"
  />

  <CustomIcon
      iconName="users"
      iconSize="4x"
  />

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
