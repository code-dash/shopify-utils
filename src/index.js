import './styles/main.scss';

import getCurrentPageType from './lib/get_current_page_type';
import toggleSidebar from './lib/toggle_sidebar';
import getCSRFToken from './lib/get_csrf_token';
import clickEvent from './lib/click_event';
import htmlSidebar from './lib/html_sidebar';
import getSelectedInpus from './lib/get_selected_inputs';
import getSelectedItems from './lib/get_selected_items';
import generateSidebar from './lib/generate_sidebar';
import addAllScripts from './lib/add_scripts';

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
import { appendHTML } from './duplicate/html';
import duplicateSubmit from './duplicate/submit';
import { extractMetafields } from './duplicate/metafields';

import { dynamicContentHTML, generateConditionType, appendDynamicContentHTML, dynamicRow, generateOptionType } from './dynamic-content/html';
import dynamic from './dynamic-content/dynamic';
import conditionPopulate from './dynamic-content/change';

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
    this.duplicateSubmit();
    this.addAllScripts();
  }
}

// Lib
Object.assign(ShopifyUtils.prototype, {
  getCurrentPageType,
  toggleSidebar,
  getCSRFToken,
  clickEvent,
  htmlSidebar,
  getSelectedInpus,
  getSelectedItems,
  generateSidebar,
  addAllScripts
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
  duplicate_navigation,
  appendHTML,
  duplicateSubmit,
  extractMetafields
})

// Dynamic Content
Object.assign(ShopifyUtils.prototype, {
  dynamic,
  dynamicContentHTML, 
  generateConditionType,
  appendDynamicContentHTML,
  dynamicRow,
  conditionPopulate,
  generateOptionType
})


window.shopifyUtils = new ShopifyUtils();
window.shopifyUtils.init();
