<template>
  <section class="pkmn-testimonial-section">
    <div class="pkmn-testimonial-section__wrapper">
      <p class="pkmn-testimonial-section__title">Top rated parking app</p>
      <p class="pkmn-testimonial-section__desc">
        See why ParkMan is loved by over 1 million car drivers around the world.
      </p>

      <div class="pkmn-carousel">
        <div class="pkmn-carousel__wrapper">
          <div
            v-for="(review, index) in reviews"
            :key="review.id.label"
            :ref="
              (el) => {
                if (el) reviewsRef[index] = el;
              }
            "
            :class="[
              'pkmn-carousel__block',
              selectedIndicatorIndex === index
                ? 'pkmn-carousel__block--selected'
                : '',
            ]"
          >
            <StarRating
              :rating="Number(review['im:rating'].label)"
              :show-rating="false"
              :read-only="true"
              :star-size="24"
              :padding="8"
            />

            <p class="pkmn-carousel__title">{{ review.title.label }}</p>

            <i class="pkmn-carousel__desc">
              {{ review.content.label }}
            </i>

            <p class="pkmn-carousel__annotation">- App Store review -</p>
          </div>
        </div>
      </div>

      <div class="pkmn-carousel__indicator-group">
        <div
          v-for="(indicator, index) in reviews.length"
          :key="index"
          @click="
            selectIndicator(index);
            scrollBasedOnIndicator(index);
          "
          :class="[
            'pkmn-carousel__indicator',
            selectedIndicatorIndex === index
              ? 'pkmn-carousel__indicator--selected'
              : '',
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },

  setup() {
    const store = useStore();
    const reviewsRef = ref([]);
    const selectedIndicatorIndex = ref(0);

    const reviews = computed(() => store.state.review.reviews);

    const fetchReviews = () => store.dispatch("fetchReviews");
    const selectIndicator = (index) => {
      selectedIndicatorIndex.value = index;
    };

    const scrollBasedOnIndicator = (indincatorIndex) => {
      reviewsRef.value[indincatorIndex].scrollIntoView({ behavior: "smooth" });
    };

    onMounted(() => {
      fetchReviews();
    });

    return {
      reviews,
      reviewsRef,
      scrollBasedOnIndicator,
      selectedIndicatorIndex,
      selectIndicator,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./TestimonialSection.scss";
</style>
