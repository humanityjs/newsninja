<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <div class="navbar-translate">
          <router-link to="/" class="navbar-brand">
            News Ninja
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar top-bar"></span>
            <span class="navbar-toggler-bar middle-bar"></span>
            <span class="navbar-toggler-bar bottom-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse show" data-nav-image="./img/blurred-image-1.jpg" data-color="orange">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/favorites"  class="nav-link">
                <p>Favorites</p>
              </router-link >
            </li>
            <!-- <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                <i class="now-ui-icons design_image" aria-hidden="true"></i>
                <p>Examples</p>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="examples/about-us.html">
                  <i class="now-ui-icons business_bulb-63"></i>
                  About-us
                </a>
                <a class="dropdown-item" href="examples/blog-post.html">
                  <i class="now-ui-icons text_align-left"></i>
                  Blog Post
                </a>
              </div>
            </li> -->
          </ul>
          </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.navbar {
  background-color: rgb(97,198,178)
}
</style>
