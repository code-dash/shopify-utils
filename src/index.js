import getCurrentPageType from './lib/get_current_page_type';
import toggleSidebar from './lib/toggle_sidebar';
import styleTag from './lib/style_tag';
import getCSRFToken from './lib/get_csrf_token';
import clickEvent from './lib/click_event';
import htmlSidebar from './lib/html_sidebar';
import getSelectedInpus from './lib/get_selected_inputs';
import getSelectedItems from './lib/get_selected_items';
import generateSidebar from './lib/generate_sidebar';

import postRequest from './requests/post';
import getRequest from './requests/get';
import createMenu  from './requests/navigation_post';

import duplicate from './duplicate/duplicate';
import duplicate_collection from './duplicate/collection';
import duplicate_product from './duplicate/product';
import duplicate_page from './duplicate/page';
import duplicate_order from './duplicate/order';
import duplicate_blog from './duplicate/blog';
import duplicate_article from './duplicate/article';
import duplicate_navigation from './duplicate/navigation';

class ShopifyUtils {
  constructor() {
    this.csrfToken = '';
    this.apiVersion = '2020-07';
    this.prefix = 'shopify_utils';
    this.sidebar = null;
    this.toggle = null;
    this.activeClass = 'is-active';
    this.duplicatePrefix = ' Copy';
  }
  
  init(){
    this.getCSRFToken();
    this.generateSidebar();
    this.toggleSidebar();
    this.clickEvent();
  }
}

// Lib
Object.assign(ShopifyUtils.prototype, {
  getCurrentPageType,
  toggleSidebar,
  styleTag,
  getCSRFToken,
  clickEvent,
  htmlSidebar,
  getSelectedInpus,
  getSelectedItems,
  generateSidebar
})

// Request
Object.assign(ShopifyUtils.prototype, {
  postRequest,
  getRequest,
  createMenu
})

// Duplicate
Object.assign(ShopifyUtils.prototype, {
  duplicate,
  duplicate_collection,
  duplicate_product,
  duplicate_page,
  duplicate_order,
  duplicate_blog,
  duplicate_article,
  duplicate_navigation
})

const shopifyUtils = new ShopifyUtils();
shopifyUtils.init();