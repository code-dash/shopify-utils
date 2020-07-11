import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './styles/main.scss';
import store from './store';

var appEleWrapper = document.createElement('div');
var appEle = document.createElement('div');
appEleWrapper.setAttribute('id', 'shopify-utils-wrapper');
appEle.setAttribute('id', 'shopify-utils');
appEleWrapper.appendChild(appEle)
document.body.prepend(appEleWrapper);

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#shopify-utils')
