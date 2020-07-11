import setCSRFtokenFunction from '../../lib/setCSRFtoken';

const state = {
  csrfToken: ''
};

const getters = {
  csrfToken: state => state.csrfToken
};

const actions = {
  setToken({commit}) {
    setCSRFtokenFunction().then(res => {
      commit('setCSRFToken', res)
    }).catch(e => {
      console.log(e);
    })
  }
};

const mutations = {
  setCSRFToken: (state, csrfToken) => (state.csrfToken = csrfToken)
};

export default {
  state,
  getters,
  actions,
  mutations
}