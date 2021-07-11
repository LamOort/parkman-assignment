<template>
  <section class="pkmn-contact-section">
    <div class="pkmn-contact-section__wrapper">
      <div class="pkmn-contact-section__content-wrapper">
        <div class="pkmn-contact-section__info">
          <div class="pkmn-contact-section__info--title">
            Do you have a question?
          </div>

          <div class="pkmn-contact-section__info--desc">
            Leave a message and our team will get back to you!
          </div>
        </div>

        <a class="pkmn-contact-section__contact-btn">
          Contact us
          <span class="pkmn-contact-section__contact-btn--icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="pkmn-contact-section__contact-btn--icon"
            >
              <path
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./ContactSection.scss";
</style>
