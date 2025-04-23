<template>
  <header class="pkmn-header">
    <div class="pkmn-header__wrapper">
      <a target="_blank" href="https://www.parkman.io/">
        <img
          alt="pkmn logo"
          :src="require('../../assets/logo-parkman.png')"
          class="pkmn-header--logo"
        />
      </a>

      <div class="pkmn-header__nav-container">
        <div class="pkmn-header__nav-link-group hidden-tablet hidden-mobile">
          <a class="pkmn-header__nav-link">
            <div class="pkmn-header__nav-link--text">ParkMan App</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="pkmn-header__nav-link--icon"
            >
              <path d="M7,10L12,15L17,10H7Z"></path>
            </svg>
          </a>

          <a class="pkmn-header__nav-link">
            <div class="pkmn-header__nav-link--text">Parking providers</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="pkmn-header__nav-link--icon"
            >
              <path d="M7,10L12,15L17,10H7Z"></path>
            </svg>
          </a>

          <a class="pkmn-header__nav-link">
            <div class="pkmn-header__nav-link--text">Support</div>
          </a>

          <a class="pkmn-header__nav-link">
            <div class="pkmn-header__nav-link--text">About us</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="pkmn-header__nav-link--icon"
            >
              <path d="M7,10L12,15L17,10H7Z"></path>
            </svg>
          </a>

          <a class="pkmn-header__nav-link">
            <div class="pkmn-header__nav-link--text">EN</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="pkmn-header__nav-link--icon"
            >
              <path d="M7,10L12,15L17,10H7Z"></path>
            </svg>
          </a>
        </div>

        <div class="pkmn-header__burger-menu hidden-desktop">
          <img :src="require('../../assets/burger-menu.svg')" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>
