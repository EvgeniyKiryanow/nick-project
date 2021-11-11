<template>
  <footer class="footer">
    <div class="footer__wrapper row ">
      <div class="footer__payment  col-md-4">
        <div class="footer__payment--title title">Принимаем к оплате</div>
        <div class="footer__payment--body">
          <img src="../assets/footer/visa.png" alt="visa" />
          <img src="../assets/footer/mastercard.png" alt="mastercard" />
          <img src="../assets/footer/privat.png" alt="privat" />
          <div class="img wrapper">
            <img src="../assets/footer/world.png" alt="world" />
            <img src="../assets/footer/liqpay.png" alt="liqpay" />
          </div>
        </div>
      </div>
      <div class="fields col-md-8  row ">
         <div class="footer__about  col-md-6">
        <div class="footer__about--title title">О Нас</div>
        <div class="footer__about--body">
          <ul class="links">
            <li><a href="#">Статьи</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Услуги</a></li>
          </ul>
          <ul class="other-links">
            <li><a href="#">Помощь с репетиторами</a></li>
            <li><a href="#">Помощь с учебными работами</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Договор публичной оферты</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__connect  col-md-6 ">
        <div class="footer__connect--title title">
          Связаться с нами
          <img src="../assets/footer/chat.png" alt="mail" />
        </div>
        <div class="footer__connect--body">
          <ul class="links">
            <li>
              <a href="#"
                >support@only-student.com
                <img src="../assets/footer/mail.png" alt="mail"
              /></a>
            </li>
            <li><a href="#">Исполнителям и Партнерам</a></li>
          </ul>
          <button><div>Регистрация</div></button>
        </div>
      </div>
      </div>
    </div>
    <div class="footer__copyrighting row">
      © 2017-2021 «only-student». Все права защищены.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  &__wrapper {
    max-width: 1440px;
    width: 96%;
    margin: 0 auto;
  }
  &__payment--body {
    display: flex;
    flex-wrap: wrap;
    max-width: 250px;
    max-height: 160px;
    width: 100%;
    height: 100%;
    img {
      width: 40%;
      margin: 2%;
      object-fit: contain;
    }
    div {
      margin: 2%;
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      img {
        margin: 0;
        width: 90%;
      }
    }
  }
  &__about--body {
    .links {
      display: flex;
      align-items: center;
      padding: 0;
      li {
        padding-right: 5px;
        a {
          color: $white;
          font-family: "M PLUS 1p", sans-serif;
          font-style: normal;
          font-weight: 800;
          font-size: $fs;
        }
      }
    }
    .other-links {
      padding: 0;
      li {
        padding: 5px 0;
        a {
          color: $white;
          font-family: "M PLUS 1p", sans-serif;
          font-style: normal;
          font-weight: 800;
          font-size: $fs;
        }
      }
    }
  }
  &__connect--title {
    display: flex;
    align-items: center;
    img {
      width: 25px;
    }
  }
  &__connect--body {
    .links {
      padding-left: 0;
      padding-bottom: 20px;
      li {
        &:first-child {
          padding: 25px 0;
        }

        a {
          display: flex;
          align-items: center;
          color: $white;
          font-family: "M PLUS 1p", sans-serif;
          font-style: normal;
          font-weight: 800;
          font-size: $fs;
        }
      }
    }
    button {
      @include button($red-btn,$red-btn-hover,$red-btn-active);
      padding: 20px;
      height: 40px;
    }
  }
  .title {
    font-family: "M PLUS 1p", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: $fs-c;
    color: $white;
  }
  &__copyrighting {
    justify-content: center;
    display: flex;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: $fs;
    line-height: 22px;
    color: $white;
    padding: 25px 0;
  }
}
</style>
