export const state = {
  id: 0,
};

export const mutations = {
  UPDATE_ID(state, payload) {
    state.id = payload;
  },
};

export const actions = {
  addId(context, value) {
    context.commit('UPDATE_ID', value);
  },
};
