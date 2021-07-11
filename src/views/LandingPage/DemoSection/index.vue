<template>
  <section class="pkmn-demo-section">
    <div class="pkmn-demo-section__wrapper">
      <div class="pkmn-demo-section__content-wrapper">
        <div class="pkmn-demo-section__info">
          <div class="pkmn-demo-section__info--title">
            Try a new parking experience today
          </div>

          <div class="pkmn-demo-section__info--desc">
            Download ParkMan for free to easily find empty parking spots and pay
            only for the time you’ve parked for.
            <br />
            <br />
            Charging is done monthly via credit card, and you will be able to
            see all of your parking fees on one receipt.
          </div>
        </div>

        <div class="pkmn-demo-section__video-block">
          <div class="pkmn-demo-section__video-block--wrapper">
            <div
              class="pkmn-demo-section__video-block--img"
              @click="showModal = true"
            >
              <img
                src="../../../assets/video-thumbnail.jpg"
                style="width: 100%"
              />
            </div>

            <div class="pkmn-demo-section__video-block--title">
              ParkMan for car drivers
            </div>
          </div>
        </div>
      </div>
    </div>

    <vue-final-modal
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <div class="aspect-ratio-wrapper">
        <iframe
          src="https://www.youtube.com/embed/3ByOPKZREXo"
          allowfullscreen
          allow="autoplay"
          class="modal-media"
          frameBorder="0"
        />
      </div>
    </vue-final-modal>
  </section>
</template>

<script>
import { VueFinalModal } from "vue-final-modal";

export default {
  components: {
    VueFinalModal,
  },

  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./DemoSection.scss";

::v-deep .modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .modal-content {
  width: 70%;
}

.aspect-ratio-wrapper {
  position: relative;
  width: 100%;

  padding-top: 56.25%; // 16/9;
}

.modal-media {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
