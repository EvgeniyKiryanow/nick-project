<template>
  <div class="articles">
    <div class="articles__wrapper">
      <h2 class="articles__title">Статьи</h2>
      <div class="articles__body">
        <ArticlesCard
          ><img
            src="../static/assets/articles/1.png"
            class="card-img-top"
            alt="logo1"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/2.png"
            class="card-img-top"
            alt="logo2"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/3.png"
            class="card-img-top"
            alt="logo3"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/4.png"
            class="card-img-top"
            alt="logo4"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/5.png"
            class="card-img-top"
            alt="logo5"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/6.png"
            class="card-img-top"
            alt="logo6"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/7.png"
            class="card-img-top"
            alt="logo7"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/8.png"
            class="card-img-top"
            alt="logo8"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/9.png"
            class="card-img-top"
            alt="logo9"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/10.png"
            class="card-img-top"
            alt="logo10"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/11.png"
            class="card-img-top"
            alt="logo11"
        /></ArticlesCard>
        <ArticlesCard
          ><img
            src="../static/assets/articles/12.png"
            class="card-img-top"
            alt="logo12"
        /></ArticlesCard>
      </div>
      <div class="articles__button">
        <button>
          <div>Больше</div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import ArticlesCard from './ArticlesCard.vue'
export default {
  name: 'Articles',
  components: { ArticlesCard },
}
</script>

<style lang="scss">
.articles {
  &__button {
    display: flex;
    justify-content: center;
    padding: 80px 0;
    button {
      height: 40px;
      padding: 0px !important;
      width: 170px;
      @include button($red-btn, $red-btn-hover, $red-btn-active);
      div {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
  &__wrapper {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
  }
  &__body {
    padding-top: 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__title {
    padding-top: 100px;
    margin-left: 15%;
    font-family: 'Russo One', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: $fs-bb;
    line-height: 112.4%;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: rgba(12, 83, 99, 0.65);
    -webkit-text-stroke: 3px #00d1ff;
    text-shadow: 3px 13px 31px rgb(0 209 255 / 50%),
      6px 6px 16px rgb(0 209 255 / 50%), -2px -2px 7px rgb(0 209 255 / 50%),
      -2px 2px 7px rgb(0 209 255 / 50%);
  }
}
</style>
