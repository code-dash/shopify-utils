import getAllItems from '../../lib/get_all_items';

const state = {
  items: {
    products: [],
    collections: [],
    pages: [],
    blogs: [],
  }
}

const actions = {
  async getItems({commit}, url, csrfToken, pageType) {
    const items = await getAllItems(url, [], csrfToken);
    commit('setItems', items, pageType)
  }
}

const getters = {
  getItem(state){
    return state.items;
  }
}

const mutations = {
  setItems: (state, items, pageType) => state.items[pageType] = items
}

export default {
  state,
  actions,
  getters,
  mutations
}