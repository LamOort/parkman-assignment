<template>
  <div class="pkmn-download-mobile hidden-tablet hidden-desktop">
    <div class="pkmn-download-mobile__wrapper">
      <div class="pkmn-download-mobile__info">
        <div class="pkmn-download-mobile__info--logo">
          <img src="https://www.parkman.io/img/logo-parkman-app.8123fa5e.svg" />
        </div>

        <div class="pkmn-download-mobile__info--wrapper">
          <p class="pkmn-download-mobile__info--title">Need parking?</p>
          <p class="pkmn-download-mobile__info--desc">
            Parking for car drivers
          </p>
        </div>
      </div>

      <button class="pkmn-download-mobile__btn">Download</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pkmn-download-mobile {
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;

  height: 70px;
  width: 100%;

  z-index: 100;

  background: var(--white);

  box-shadow: 2px 4px 28px rgba(14, 17, 20, 0.1);

  &__wrapper {
    padding-left: 16px;
    padding-right: 16px;

    width: 100%;

    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }

  &__info {
    display: inline-flex;

    &--wrapper {
      display: flex;
      flex-direction: column;
    }

    &--logo {
      margin-right: 8px;
    }

    &--title {
      font-weight: var(--pkmn-font-weight-medium);
      font-size: 12px;
      line-height: 14px;

      margin-bottom: 2px;
    }

    &--desc {
      font-weight: var(--pkmn-font-weight-regular);
      font-size: 10px;
      line-height: 10px;
    }
  }

  &__btn {
    border-radius: 4px;
    border: 2px solid var(--pkmn-primary-color);
    background: var(--pkmn-primary-color);

    padding: 12px;
    color: var(--white);

    font-weight: var(--pkmn-font-weight-bold);

    font-size: var(--pkmn-small-text-font-size);
    line-height: var(--pkmn-small-text-line-height);
  }
}
</style>
