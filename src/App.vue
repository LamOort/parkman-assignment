<template>
  <LandingPage />
</template>

<script>
import LandingPage from "./views/LandingPage";

export default {
  name: "App",
  components: { LandingPage },
};
</script>

<style lang="scss">
@import "./style/_variables.css";

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

head {
  display: none;
}

body {
  font-family: var(--pkmn-font-family);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

html {
  display: block;
}

/* CSS Reset */
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li,
form,
label,
table,
tbody,
thead,
tr,
th,
td,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none !important;
}

a,
a:hover,
a:focus {
  cursor: pointer;
  text-decoration: none;

  color: inherit;
}

//Utils class
/** MOBILE */
@media (max-width: 767px) {
  .hidden-mobile {
    display: none !important;
  }
}

/** TABLET */
@media (min-width: 768px) and (max-width: 1439px) {
  .hidden-tablet {
    display: none !important;
  }
}
/** DESKTOP */
@media (min-width: 1440px) {
  .hidden-desktop {
    display: none !important;
  }
}
</style>
