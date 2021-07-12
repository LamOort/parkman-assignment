<template>
  <main style="width: 100%">
    <Header />
    <div class="pkmn-landing-page-content">
      <HeroSection />
      <HeroGradient />
      <MobileDownload />

      <UsageSection />
      <TestimonialSection />

      <PricingSection />
      <DemoSection />
      <CustomSection />

      <ContactSection />
      <Footer />
    </div>
  </main>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import HeroGradient from "./HeroGradient";
import MobileDownload from "./MobileDownload";
import HeroSection from "./HeroSection";
import UsageSection from "./UsageSection";
import TestimonialSection from "./TestimonialSection";
import PricingSection from "./PricingSection";
import DemoSection from "./DemoSection";
import CustomSection from "./CustomSection";
import ContactSection from "./ContactSection";

export default {
  components: {
    Header,
    HeroSection,
    HeroGradient,
    MobileDownload,
    UsageSection,
    TestimonialSection,
    PricingSection,
    DemoSection,
    CustomSection,
    ContactSection,
    Footer,
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
