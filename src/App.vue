<template>
  <div id="app">
   <Header />
   <div class="body"></div>
   <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'TitlePage',
  components: {Header,Footer}
}

</script>

<style lang="scss">
@import "styles/media.scss";
@import "styles/mixins.scss";
@import "styles/reset.scss";
@import "styles/variables.scss";
html {
  font-size: 8px;
}
body {
  background-color: $background;
}
.body {
height: 500px;
}
</style>
