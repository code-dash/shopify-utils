import getCurrentPageType from '../../lib/get_current_page_type';

const state = {
  pageType: ''
};

const getters = {
  pageType: state => state.pageType
};

const actions = {
  getPageType({commit}) {
    commit('pageType', getCurrentPageType());
  }
};

const mutations = {
  pageType: (store, pageType) => (store.pageType = pageType)
};

export default {
  state,
  getters,
  actions,
  mutations
}