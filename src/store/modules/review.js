import axios from "axios";

/**
 * Initialize state
 */

const state = {
  reviews: [],
  responseStatus: {},
};

//getters
const getters = {};

//actions
const actions = {
  fetchReviews({ commit }) {
    //Reset responseStatus
    commit("setResponseStatus", "");

    axios
      .get(
        "https://itunes.apple.com/us/rss/customerreviews/id=505190698/mostrecent/json",
      )
      .then((res) => commit("setReviewsToStore", res.data.feed.entry))
      .catch((err) => commit("setResponseStatus", err));
  },
};

//mutations
const mutations = {
  setReviewsToStore(state, reviews) {
    state.reviews = reviews
      .filter((review) => review["im:rating"].label >= 4)
      .slice(0, 5);
  },

  setResponseStatus(state, status) {
    state.responseStatus = status;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
