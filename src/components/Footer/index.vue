<template>
  <footer class="pkmn-footer">
    <div class="pkmn-footer__wrapper">
      <div class="pkmn-footer__content-wrapper">
        <a target="_blank" href="https://www.parkman.io/">
          <img src="../../assets/logo-parkman.png" class="pkmn-footer__logo" />
        </a>

        <div class="pkmn-footer__navigation-group">
          <div class="pkmn-footer__navigation-col">
            <p class="pkmn-footer__navigation-col--title">ParkMan app</p>

            <a class="pkmn-footer__navigation-col--link"> How it works </a>
            <a class="pkmn-footer__navigation-col--link">
              ParkMan for business</a
            >
          </div>

          <div class="pkmn-footer__navigation-col">
            <p class="pkmn-footer__navigation-col--title">Parking providers</p>

            <a class="pkmn-footer__navigation-col--link"> Airports </a>
            <a class="pkmn-footer__navigation-col--link"> Garages</a>
            <a class="pkmn-footer__navigation-col--link"> Surface lots</a>
            <a class="pkmn-footer__navigation-col--link"> Street parking</a>
            <a class="pkmn-footer__navigation-col--link"> Events</a>
          </div>

          <div class="pkmn-footer__navigation-col">
            <p class="pkmn-footer__navigation-col--title">Support</p>

            <a class="pkmn-footer__navigation-col--link"> ParkMan app FAQ</a>
            <a class="pkmn-footer__navigation-col--link"> Contact support</a>
          </div>

          <div class="pkmn-footer__navigation-col">
            <p class="pkmn-footer__navigation-col--title">About us</p>

            <a class="pkmn-footer__navigation-col--link">Our values </a>
            <a class="pkmn-footer__navigation-col--link"> Meet the team</a>
            <a class="pkmn-footer__navigation-col--link"> Join us</a>
            <a class="pkmn-footer__navigation-col--link"> Support</a>
            <a class="pkmn-footer__navigation-col--link"> Blog</a>
          </div>
        </div>

        <div class="pkmn-footer__bottom-line">
          <div class="pkmn-footer__bottom-line--col">
            <div class="pkmn-footer__bottom-line--copyright">
              &copy;ParkMan Oy 2020
            </div>

            <a class="pkmn-header__nav-link">
              <div class="pkmn-header__nav-link--text">Finland</div>

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

          <div class="pkmn-footer__bottom-line--col">
            <div class="pkmn-footer__bottom-line--legals">
              <a class="pkmn-footer__navigation-col--link"> Term of Use</a>
              <a class="pkmn-footer__navigation-col--link"> Privacy Policy</a>
            </div>

            <div class="pkmn-footer__bottom-line--social-medias">
              <span class="pkmn-footer__bottom-line--social-media-wrapper">
                <svg
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="pkmn-footer__bottom-line--social-media-icon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.26172 0C2.05258 0 0.261719 1.79086 0.261719 4V20C0.261719 22.2091 2.05258 24 4.26172 24H11.999V15.75H8.99902V12H11.999V9C11.999 6.5145 14.0135 4.5 16.499 4.5H19.499V8.25H17.999C17.9321 8.25 17.8662 8.24949 17.8016 8.24899C17.0668 8.24331 16.499 8.23892 16.499 9V12H20.249L18.749 15.75H16.499V24H20.2617C22.4709 24 24.2617 22.2091 24.2617 20V4C24.2617 1.79086 22.4709 0 20.2617 0H4.26172Z"
                    fill="#222222"
                  />
                </svg>
              </span>

              <span class="pkmn-footer__bottom-line--social-media-wrapper">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="pkmn-footer__bottom-line--social-media-icon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0H4ZM8.57098 18.6273C8.57098 18.8924 8.35609 19.1073 8.09099 19.1073H6.04778C5.78268 19.1073 5.56779 18.8924 5.56779 18.6273V10.0622C5.56779 9.79712 5.78268 9.58223 6.04778 9.58223H8.09099C8.35609 9.58223 8.57098 9.79712 8.57098 10.0622V18.6273ZM7.06938 8.77485C5.99737 8.77485 5.12832 7.90579 5.12832 6.83378C5.12832 5.76177 5.99737 4.89272 7.06938 4.89272C8.14139 4.89272 9.01045 5.76177 9.01045 6.83378C9.01045 7.90579 8.14144 8.77485 7.06938 8.77485ZM19.2487 18.6659C19.2487 18.9097 19.0511 19.1073 18.8074 19.1073H16.6149C16.3712 19.1073 16.1736 18.9097 16.1736 18.6659V14.6484C16.1736 14.6043 16.1745 14.5525 16.1756 14.4943V14.4941C16.1891 13.7615 16.221 12.0222 14.6073 12.0222C13.2561 12.0222 12.982 13.4096 12.927 14.0322V18.6659C12.927 18.9097 12.7294 19.1073 12.4857 19.1073H10.3651C10.1214 19.1073 9.9238 18.9097 9.9238 18.6659V10.0236C9.9238 9.77984 10.1214 9.58223 10.3651 9.58223H12.4857C12.7294 9.58223 12.927 9.77984 12.927 10.0236V10.7708C13.428 10.0189 14.1727 9.43851 15.7581 9.43851C19.2491 9.43851 19.2489 12.6816 19.2487 14.49V14.5206V18.6659Z"
                    fill="#222222"
                  />
                </svg>
              </span>

              <span class="pkmn-footer__bottom-line--social-media-wrapper">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="pkmn-footer__bottom-line--social-media-icon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0H4ZM17.9479 9.29277V9.6999C17.9479 13.7711 14.8647 18.4627 9.21202 18.4627C7.48006 18.4627 5.8623 17.9587 4.51099 17.0863L4.56047 17.0902C4.7891 17.1082 5.00338 17.125 5.23422 17.125C6.68069 17.125 7.99394 16.6404 9.04072 15.8067C7.68942 15.7874 6.5665 14.8956 6.16682 13.6742C6.35714 13.713 6.54747 13.7324 6.73779 13.7324C7.02328 13.7324 7.30877 13.6936 7.55619 13.616C6.18585 13.3252 5.13906 12.0845 5.13906 10.5917V10.5529C5.51971 10.7856 6.01456 10.9213 6.5094 10.9407C5.691 10.3978 5.13906 9.44787 5.13906 8.38159C5.13906 7.81938 5.29132 7.29593 5.55778 6.83065C7.08038 8.69178 9.32621 9.91315 11.8766 10.0489C11.8195 9.81622 11.8004 9.58358 11.8004 9.35093C11.8004 7.64489 13.1708 6.26843 14.8647 6.26843C15.7402 6.26843 16.5395 6.63678 17.1105 7.23777C17.8147 7.10207 18.4618 6.85004 19.0518 6.48169C18.8234 7.199 18.3286 7.79999 17.7005 8.18773C18.3286 8.11018 18.9186 7.95508 19.4705 7.70306C19.0518 8.32343 18.538 8.86626 17.9479 9.29277Z"
                    fill="#222222"
                  />
                </svg>
              </span>

              <span class="pkmn-footer__bottom-line--social-media-wrapper">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="pkmn-footer__bottom-line--social-media-icon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0H4ZM19.4128 16.5864V10.458V7.41309C19.4128 5.81445 18.1756 4.57715 16.5769 4.57715H7.40323C5.8045 4.57715 4.56738 5.81445 4.56738 7.41309V10.458V16.5864C4.56738 18.1855 5.8045 19.4224 7.40323 19.4224H16.5769C18.1756 19.4224 19.4128 18.1855 19.4128 16.5864ZM17.3951 6.25195H15.1873V8.78369H17.6996V6.57568V6.23291L17.3951 6.25195ZM11.9903 9.35449C12.8658 9.35449 13.6461 9.79199 14.1219 10.4585C14.4264 10.896 14.6168 11.4287 14.6168 12C14.6168 13.4463 13.4367 14.6265 11.9903 14.6265C10.5438 14.6265 9.36377 13.4463 9.36377 12C9.36377 11.4287 9.55408 10.896 9.85861 10.4585C10.3344 9.79199 11.1147 9.35449 11.9903 9.35449ZM16.0821 12C16.0821 11.4668 15.9679 10.8579 15.7775 10.4771H18.0805V16.5864C18.0805 17.3862 17.3763 18.0903 16.5769 18.0903H7.40323C6.60385 18.0903 5.89966 17.3862 5.89966 16.5864V10.4771H8.20258C8.01227 10.8579 7.89807 11.4478 7.89807 12C7.89807 14.2646 9.72519 16.0918 11.9901 16.0918C14.2549 16.0918 16.0821 14.2456 16.0821 12Z"
                    fill="#222222"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./Footer.scss";
@import "../Header/Header.scss";
</style>
