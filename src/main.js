import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import './styles/main.scss';
import store from './store';

var appEle = document.createElement('div');
appEle.setAttribute('id', 'shopify-utils');
document.body.prepend(appEle);

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#shopify-utils')
