<template>
  <div class="card">
    <div class="card-wrapper">
      <slot />
      <div class="card-body">
        <h5 class="card-title">Диплом по уголовному праву</h5>
        <p class="card-text">
          Написать дипломную работу по юриспруденции, в частности по уголовному
          праву лучше всего доверить испо...<a class="card-link" href="#"
            >Подробнее</a
          >
        </p>
      </div>
    </div>
    <div class="card-data">08.09.2021</div>
  </div>
</template>

<style lang="scss">
.card {
  position: relative;
  width: 20%;
  margin: 2%;
  background: transparent;
  &-wrapper {
    overflow: hidden;
    border-radius: 15px;
    background: #39104d;
  }
  &-link {
    color: $white;
    font-family: 'M PLUS 1p', sans-serif;
    font-style: normal;
    font-weight: 600;
    text-decoration: underline;
    font-size: $fs-ss;
    line-height: 112.4%;
  }
  &-data {
    position: absolute;
    background: $pink-w;
    border-radius: 0 0 10px 10px;
    box-shadow: 0px -9px 8px 4px $pink-w;

    color: $white;
    bottom: -7%;
    max-width: 100px;
    width: 100%;
    text-align: center;
    height: 15px;
    @include flex-center;
    padding-left: 5%;
  }
  &-body {
    padding-bottom: 20px;
    background: #39104d;
    position: relative;
    overflow: hidden;
  }
  &-title {
    font-family: 'M PLUS 1p', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: $fs-s;
    line-height: 112.4%;
    color: $white;
  }
  &-text {
    font-family: 'M PLUS 1p', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: $fs-ss;
    line-height: 112.4%;
    color: $white;
  }
}
</style>
