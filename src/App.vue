<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <div class="content-body">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}
html, body {
  margin: 0;
  padding: 0;
}
.content-body {
  background-color: #eee;
  min-height: 83vh;
}
.navbar {
  margin-bottom: 0px;
}
</style>
