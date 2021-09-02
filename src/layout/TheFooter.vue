<template>
  <footer class="block footer">
    <div class="container">
      <section class="footer__section">
        <ul class="footer-brands">
          <li>
            <fa :icon="['fab','facebook-f']" color="white" size="3x" />
          </li>
          <li>
            <fa :icon="['fab','twitter']" color="white" size="3x" />
          </li>
          <li>
            <fa :icon="['fab','linkedin-in']" color="white" size="3x" />
          </li>
        </ul>
        <div class="footer-logo">
          <img src="@/assets/images/footer-logo.svg" alt="footer logo">
        </div>
        <ul class="footer-list">
          <li><a href="#">اتصل بنا</a></li>
          <li><a href="#">شروط الاستخدام</a></li>
          <li><a href="#">سياسة الخصوصية</a></li>
          <li><a href="#">من نحن</a></li>
        </ul>
      </section>
      <hr>
      <section class="footer__copyright-section">
        <p class="footer__copyright">جميع الحقوق محفوظة &copy; ورقة 2020</p>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>

</style>