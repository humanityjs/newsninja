<template>
  <div>
    <footer class="footer">
      <div class="container">
        <nav>
          <ul>
            <li>
              <router-link to="/" class="nav-link">
                  NEWS NINJA
              </router-link>
            </li>
            <li>
              <a href="#" class="nav-link">
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div class="copyright">
          &copy; {{getYear}}, Theme designed by <a href="https://www.creative-tim.com/" target="_blank" class="copyright-link">Creative Tim</a>. Coded by <a href="https://github.com/humanityjs" target="_blank" class="copyright-link">Bamidele Daniel</a>.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #000;
  color: #fff;
}
</style>
