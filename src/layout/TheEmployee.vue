<template>
  <section  class="block container">
    <header class="block__header" data-aos="fade-up">
      <h2 class="mb-2 text-heading">العمل كموظف مستقل</h2>
      <p class="mb-2 text-body">بإمكانك العمل من المنزل ككاتب أو مدقق محتوى من خلال التسجيل في منصة ورقة</p>
    </header>
    <div class="grid grid--1x2">
      <article data-aos="flip-left">
        <img class="mb-1" src="@/assets/images/independent-auditor.svg" alt="independent auditor">
        <h3 class="text-heading">العمل كمدقق مستقل</h3>
        <p>استثمر مهاراتك في التدقيق وسجل هنا</p>
        <button class="btn btn--primary">تسجيل مدقق</button>
      </article>
      <article data-aos="flip-right">
        <img class="mb-1" src="@/assets/images/independent-writer.svg" alt="independent auditor">
        <h3 class="text-heading">العمل ككاتب مستقل</h3>
        <p>استثمر مهاراتك في الكتابة وسجل هنا</p>
        <button class="btn btn--primary">تسجيل كاتب</button>
      </article>
    </div>
  </section>
  <hr class="container">
</template>

<script>
export default {
  name: "TheEmployee"
}
</script>

<style scoped>

</style>