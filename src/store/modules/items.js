import getAllItems from '../../lib/get_all_items';
import filtration from '../../lib/filtration';

const state = {
  items: {
    products: [],
    collections: [],
    pages: [],
    blogs: [],
    articles: []
  },
  filteredItems: {
    products: [],
    collections: [],
    pages: [],
    blogs: [],
    articles: []
  }
}

const actions = {
  async getItems({commit}, {url, csrfToken, pageType, conditionArrayElements, conditionRadio}) {
    const items = await getAllItems(url, [], csrfToken).then(res => res);
    const filterItems = filtration(items, conditionArrayElements, conditionRadio);
    commit('setItems', {items, pageType});
    commit('setFilteredItems', {filterItems, pageType});
  },
}

const getters = {
  getItem(state) {
    return state.items;
  },
  getFilteredItems (state) {
    return state.filteredItems;
  }
}

const mutations = {
  setItems: (state, {items, pageType}) => state.items[pageType] = items,
  setFilteredItems: (state, {filterItems, pageType}) => state.filteredItems[pageType] = filterItems
}

export default {
  state,
  actions,
  getters,
  mutations
}