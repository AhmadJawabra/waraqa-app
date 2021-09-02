<template>
  <section class="block container">
    <header class="block__header mb-3">
      <h2 class="mb-2 text-heading">لماذا منصة ورقة</h2>
      <p class="text-body">لأن انضمامك لمنصة ورقة سيتيح لك الوصول لما يأتي</p>
    </header>
    <div class="grid grid--1x3">
      <article>
        <CustomIcon
            class="mb-1"
            iconName="search"
            iconSize="4x"
        />
        <p class="text-heading">مدققو محتوى مختصون</p>
      </article>
      <article>
        <CustomIcon
            class="mb-1"
            iconName="edit"
            iconSize="4x"
        />
        <p class="text-heading w-75 centered">محتوى يواكب معايير محركات البحث</p>
      </article>
      <article>
        <CustomIcon
            class="mb-1"
            iconName="lightbulb"
            iconSize="4x"
        />
        <p class="text-heading">محتوى فريد</p>
      </article>
      <article>
        <CustomIcon
            class="mb-1"
            iconName="file-alt"
            iconSize="4x"
        />
        <p class="text-heading">تقارير ذكية شاملة</p>
      </article>
      <article>
        <CustomIcon
            class="mb-1"
            iconName="users"
            iconSize="4x"
        />
        <p class="text-heading">كتاب محتوى مختصون</p>
      </article>
      <article>
        <CustomIcon
            class="mb-1"
            iconName="tags"
            iconSize="4x"
        />
        <p class="text-heading">أسعار منافسة</p>
      </article>
    </div>
    <div class="f-centered mt-2">
      <button class="btn btn--primary">طلب انضمام عميل</button>
    </div>
  </section>
  <hr class="container">
</template>

<script>
import CustomIcon from '../components/shared/CustomIcon'
export default {
  name: "WhyUs",
  components: {
    CustomIcon
  }
}
</script>

<style scoped>

</style>