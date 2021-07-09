<template>
  <section class="pkmn-usage-section">
    <div class="pkmn-usage-section__wrapper">
      <p class="pkmn-usage-section__title">How to park using ParkMan</p>
      <p class="pkmn-usage-section__desc">
        ParkMan is the easiest app you'll ever use. No more parking stress!
        Here's how it works.
      </p>

      <div class="pkmn-usage-section__content-shell">
        <!-- Step 1 -->
        <div class="pkmn-usage-section__content-block">
          <div class="pkmn-usage-section__content-block--img-wrapper">
            <img
              src="../../../assets/usage-step-1-en-us.png"
              class="pkmn-usage-section__content-block--img left"
            />
          </div>
          <div class="pkmn-usage-section__content-block--step-wrapper right">
            <p class="title">Download the app</p>

            <p class="desc">
              Open the ParkMan app and search for the location where you need to
              park
            </p>

            <div class="bullet-wrapper on-right-block">1</div>

            <img
              src="../../../assets/usage-step-1-en-us.png"
              style="width: 200px"
              class="hidden-tablet hidden-desktop"
            />
          </div>
        </div>

        <!-- Step 2 -->
        <div class="pkmn-usage-section__content-block reverse">
          <div class="pkmn-usage-section__content-block--img-wrapper">
            <img
              src="../../../assets/usage-step-2-en-us.png"
              class="pkmn-usage-section__content-block--img right"
            />
          </div>
          <div class="pkmn-usage-section__content-block--step-wrapper left">
            <p class="title">Swipe to see parking options</p>

            <p class="desc">
              We match you with the best posible parking spots and providers
              near you.
            </p>

            <img
              src="../../../assets/usage-step-2-en-us.png"
              style="width: 200px"
              class="hidden-tablet hidden-desktop"
            />

            <div class="bullet-wrapper on-left-block">2</div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="pkmn-usage-section__content-block">
          <div class="pkmn-usage-section__content-block--img-wrapper">
            <img
              src="../../../assets/usage-step-3-en-us.png"
              class="pkmn-usage-section__content-block--img left"
            />
          </div>
          <div class="pkmn-usage-section__content-block--step-wrapper right">
            <p class="title">Click to confirm parking</p>

            <p class="desc">
              Select the parking time and payment method and click on confirm
              parking. ParkMan also lets you reserve parking in certain
              locations.
            </p>

            <img
              src="../../../assets/usage-step-3-en-us.png"
              style="width: 200px"
              class="hidden-tablet hidden-desktop"
            />

            <div class="bullet-wrapper on-right-block">3</div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="pkmn-usage-section__content-block reverse">
          <div class="pkmn-usage-section__content-block--img-wrapper">
            <img
              src="../../../assets/usage-step-4-en-us.png"
              class="pkmn-usage-section__content-block--img right"
            />
          </div>
          <div class="pkmn-usage-section__content-block--step-wrapper left">
            <p class="title">Enjoy a great parking experience</p>

            <p class="desc">
              Select the parking time and payment method and click on confirm
              parking. ParkMan also lets you reserve parking in certain
              locations.
            </p>

            <img
              src="../../../assets/usage-step-4-en-us.png"
              style="width: 200px"
              class="hidden-tablet hidden-desktop"
            />

            <div class="bullet-wrapper on-left-block">4</div>
          </div>
        </div>

        <!-- Step 5 -->
        <div class="pkmn-usage-section__content-block">
          <div class="pkmn-usage-section__content-block--img-wrapper">
            <img
              src="../../../assets/usage-step-5-en-us.png"
              class="pkmn-usage-section__content-block--img left"
            />
          </div>
          <div
            class="pkmn-usage-section__content-block--step-wrapper right last"
          >
            <p class="title">Pay only for the exact parking time</p>

            <p class="desc">
              Tap ‘stop parking’ to end parking. Pay only for the exact parking
              time even if you chose a longer time to begin with.
            </p>

            <img
              src="../../../assets/usage-step-5-en-us.png"
              style="width: 200px"
              class="hidden-tablet hidden-desktop"
            />

            <div class="bullet-wrapper on-right-block">5</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./UsageSection.scss";
</style>
