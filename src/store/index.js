import Vue from 'vue';
import Vuex from 'vuex';
import crsfToken from './modules/csrf-token';
import pageType from './modules/page-type';
import items from './modules/items';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    crsfToken,
    pageType,
    items
  }
})