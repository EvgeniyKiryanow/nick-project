<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__wrapper_logo">
        <img src="../static/assets/header/logo.png" alt="logo" loading="lazy" />
        <div class="student">
          <p>Only</p>
          <p>Student</p>
        </div>
      </div>
      <div class="header__consultation">
        <button>
          <div>Получить консультацию</div>
          <div class="circle">
            <img src="../static/assets/header/arrow.svg" alt="arrow" loading="lazy" />
          </div>
        </button>
      </div>
      <div class="header__navigation">
        <div class="header__languages">
          <div class="header__dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="../static/assets/header/ru.png" alt="ru icon" /> ru
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#"
                  ><img src="../static/assets/header/en.png" alt="en icon" />en</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <img src="../static/assets/header/de.png" alt="de icon" />de</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <img src="../static/assets/header/ua.png" alt="ua icon" />ua</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="header__menu">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Mеню
            <div class="lines"></div>
          </button>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang='scss'>
.header {
  background-color: $header;
  width: 100%;
  &__wrapper {
    max-width: 1100px;
    width: 100%;
    height: 90px;
    margin: 0 auto;
    @include flex-center;
    justify-content: space-between;
  }
  &__navigation {
    @include flex-center;
  }
  &__nav {
    display: none;
  }
  &__wrapper_logo {
    position: relative;
    width: 100px
  }
  &__consultation {
    button {
      @include button($pink-btn,$pink-btn-hover,$pink-btn-active);
    }
  }
  &__menu {
    button {
      background: transparent;
      border: unset;
      @include header-font;
      font-size: $fs-b;
      display: flex;
      align-items: center;
      .lines {
        @include menu-lines;
      }
    }
  }
  &__dropdown {
    ul {
      background: transparent;
      li {
        &:hover {
          a {
            color: black;
          }
        }
        a {
          display: flex;
          align-items: center;
          @include header-font;
          font-size: $fs;
        }
      }
    }
  }
  #dropdownMenuButton1 {
    background: transparent;
    border: unset;
    display: flex;
    align-items: center;
    @include header-font;
    font-size: $fs;
  }

  .student {
    position: absolute;
    top: 40%;
    right: -10%;
    p {
      font-family: Russo One;
      font-style: normal;
      font-weight: normal;
      font-size: $fs;
      letter-spacing: 0.095em;
      text-transform: uppercase;
      -webkit-text-stroke: 1px white;
      // background:linear-gradient(259.98deg, rgba(16, 196, 16, 0.5) 6.81%, rgba(0, 209, 255, 0.5) 40.18%, rgba(0, 209, 255, 0.5) 52.6%, rgba(179, 26, 219, 0.5) 80.21%) ;
      // text-shadow: 2px 1px 1px  rgb(16, 196, 16), 2px 1px 1px rgb(0, 209, 255), 2px 1px 1px rgb(0, 209, 255), 2px 1px 1px rgb(179, 26, 219);
      &:first-child {
        text-align: right;
      }
    }
  }
}

</style>
