export const state = () => ({
  shouldRemountFeedback: false,
});

export const mutations = {
  changeShouldRemountFeedback(state) {
    state.shouldRemountFeedback = !state.changeShouldRemountFeedback;
  },
};
export const actions = {
  rerenderFeedback({ commit }) {
    commit('changeShouldRemountFeedback');
  },
};
