<template>
  <main style="width: 100%">
    <Header />
    <div class="pkmn-landing-page-content">
      <HeroSection />
      <HeroGradient />
      <MobileDownload />
    </div>
  </main>
</template>

<script>
import Header from "../../components/Header";
import HeroGradient from "./HeroGradient";
import MobileDownload from "./MobileDownload";
import HeroSection from "./HeroSection";

export default {
  components: {
    Header,
    HeroSection,
    HeroGradient,
    MobileDownload,
  },
};
</script>

<style lang="scss" scoped>
.pkmn-landing-page-content {
  margin-top: 80px;
  width: 100%;
  height: 100%;

  /** TABLET */
  @media (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }

  /** MOBILE */
  @media (max-width: 767px) {
    margin-top: 56px;
  }
}
</style>
