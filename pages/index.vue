<template>
  <div>
    <Header />
    <div class="body">
      <Articles />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Articles from '../components/Articles.vue'
export default {
  name: 'TitlePage',
  components: { Header, Footer, Articles },
}
</script>
<style lang="scss">
html {
  font-size: 8px;
}
body {
  background-color: #01000F;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

button {
  cursor: pointer;
}
a {
  text-decoration: unset;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

</style>
