<template>
  <div class="pkmn-hero-gradient">
    <img class="pkmn-hero-gradient__img" src="../../../assets/gradient.svg" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pkmn-hero-gradient {
  position: absolute;
  width: 100%;

  margin-top: -35%;

  z-index: 0;

  /** TABLET */
  @media (min-width: 768px) and (max-width: 1439px) {
    margin-top: -40%;
  }

  /** MOBILE */
  @media (max-width: 767px) {
    margin-top: -60%;
  }

  &__img {
    width: 100%;
    height: auto;
  }
}
</style>
