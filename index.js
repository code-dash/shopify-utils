class ShopifyUtils {
  constructor() {
    this.csrfToken = '';
    this.prefix = 'shopify_utils';
    this.sidebar = null;
    this.toggle = null;
    this.activeClass = 'is-active';
    this.duplicateIcon = `<svg viewBox="0 0 20 20" class="icon-duplicate" focusable="false" aria-hidden="true"><path d="M8 12h8V4H8v8zm4 4H4V8h2v5a1 1 0 0 0 1 1h5v2zm5-14H7a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" fill-rule="evenodd"></path></svg>`;
  }
  
  init(){
    this.getCSRFToken();
    this.generateSidebar();
    this.toggleSidebar();
    this.clickEvent();
  }

  toggleSidebar(){
    this.toggle.addEventListener('click', () => {
      this.sidebar.classList.toggle(this.activeClass)
      this.toggle.classList.toggle(this.activeClass)
    })
  }

  getCurrentPageType(){
    if(window.location.pathname.match(/\/admin\/products\/\d+/)){
      return 'product';
    } else if(window.location.pathname.match(/\/admin\/products$/)){
      return 'products';
    } else if(window.location.pathname.match(/\/admin\/collections\/\d+/)){
      return 'collection';
    } else if(window.location.pathname.match(/\/admin\/collections$/)) {
      return 'collections';
    } else if(window.location.pathname.match(/\/admin\/pages\/\d+/)){
      return 'page';
    } else if(window.location.pathname.match(/\/admin\/pages$/)){
      return 'pages';
    } else if(window.location.pathname.match(/\/admin\/orders\/\d+/)){
      return 'order';
    } else if(window.location.pathname.match(/\/admin\/orders$/)){
      return 'orders';
    }
  }

  getSelectedInpus(){
    const currentPage = this.getCurrentPageType();
    let ids = [];
    if(currentPage === 'products'){
      document.querySelectorAll(`input[type="checkbox"][id*=ResourceListItemCheckbox]:checked`).forEach(item => {
        const parent = item.closest('[id*="gid://shopify/Product/"]');
        const id = parent.getAttribute('id').split('/').pop();
        ids.push(id);
      })
    } else if(currentPage === 'product' || currentPage === 'collection' || currentPage === 'page' || currentPage === 'order'){
      const id = window.location.pathname.split('/').pop();
      ids.push(id);
    } else if(currentPage === 'collections'){
      document.querySelectorAll(`input[type="checkbox"][id*=collection_ids_]:checked`).forEach(item => {
        const id = item.getAttribute('id').split('collection_ids_').pop();
        ids.push(id);
      })
    } else if(currentPage === 'pages'){
      document.querySelector(`[name="app-iframe"]`).contentWindow.document.querySelectorAll(`input[type="checkbox"][id*="ResourceListItemCheckbox"][aria-checked="true"]`).forEach(item => {
        const parent = item.closest('[id*="gid://shopify/OnlineStorePage/"]');
        const id = parent.getAttribute('id').split('/').pop();
        ids.push(id);
      })
    }
    return ids;
  }

  async getSelectedItems(){
    const currentPage = this.getCurrentPageType();
    const ids = this.getSelectedInpus();
    const idsString = ids.join(',');
    let items = [];

    if(!ids.length) {
      alert('No items selected!')
      return;
    }

    if(currentPage === 'product' || currentPage === 'products'){
      items = await this.getRequest(`products?ids=${idsString}`, 'GET')
      return items.products;
    }

    if(currentPage === 'collection' || currentPage === 'collections'){
      items = await this.getRequest(`collections.json?ids=${idsString}`, 'GET')
      return items.collections;
    }

    if(currentPage === 'page' || currentPage === 'pages'){
      items = await this.getRequest(`pages.json?ids=${idsString}`, 'GET')
      const filterItems = items.pages.filter(item => idsString.indexOf(item.id) > -1);
      return filterItems;
    }
  }

  async duplicate_collection(element){
    delete element.products_count;
    element.title += ' Copy';
    if(element.collection_type === 'smart'){
      await this.postRequest('smart_collections.json', "POST", {
        smart_collection: element
      });
    } else {
      await this.postRequest('custom_collections.json', "POST", {
        custom_collection: element
      });
    }
  }

  async duplicate_product(element){
    element.title += ' Copy';
    const response = await this.postRequest('products.json', "POST", {
      product: element
    });
    if(response.errors){
      alert(JSON.stringify(response.errors))
    }
  }

  async duplicate_page(element){
    element.title += ' Copy';
    const response = await this.postRequest('pages.json', "POST", {
      page: element
    });
  }

  async duplicate(){
    const currentPage = this.getCurrentPageType();
    const itemArray = await this.getSelectedItems();
    for (let index = 0; index < itemArray.length; index++) {
      const element = itemArray[index];
      delete element.id;
      delete element.handle;
      delete element.admin_graphql_api_id;
      delete element.updated_at;
      if(currentPage === 'collection' || currentPage === 'collections'){
        await this.duplicate_collection(element);
      } else if(currentPage === 'product' || currentPage === 'products'){
        await this.duplicate_product(element)
      } else if(currentPage === 'page' || currentPage === 'pages'){
        await this.duplicate_page(element)
      }
    }
  }

  clickEvent(){
    const self = this;
    document.querySelector('.js-shopify_utils-action').addEventListener('click', function(e) {
      e.preventDefault();
      const type = this.getAttribute('data-type');
      self[type]();
    })
  }
  
  styleTag(){
    return `
    <style>
      .${this.prefix}-sidebar {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        z-index: 9999;
      }
      
      .${this.prefix}-toggle {
        position: absolute;
        top: 50%;
        right: 100%;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      
      .${this.prefix}-toggle:after {
        content: '';
        display: block;
        width: 7px;
        height: 7px;
        margin: 0 auto;
        border-bottom: 1px solid #000;
        border-left: 1px solid #000;
        transform: rotate(45deg);
      }
      
      .${this.prefix}-toggle.is-active:after {
        transform: rotate(-135deg);
      }
      
      .${this.prefix}-sidebar__inner {
        overflow: hidden;
        background-color: #fff;
        width: 0;
        height: 100vh;
        transition: width 0.5s, padding 0.5s;
        box-shadow: -2px 0 5px rgba(0,0,0,.1);
      }
      
      .${this.prefix}-sidebar__inner ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .${this.prefix}-sidebar__inner li {
        padding: 0 0 5px;
        border-bottom: 1px solid #dfe3e8;
      }
      
      .${this.prefix}-sidebar__inner ul a {
        display: flex;
        align-items: center;
        color: #454f5b;
        white-space: nowrap;
        text-decoration: none;
        opacity: 0.7;
      }
      
      .${this.prefix}-sidebar__inner ul a:hover {
        opacity: 1;
      } 
      
      .${this.prefix}-sidebar__inner ul svg {
        margin-right: 4px;
      }
      
      .${this.prefix}-sidebar__inner ul .icon-duplicate {
        width: 16px;
        height: 16px;
      }
      
      .${this.prefix}-sidebar.is-active .${this.prefix}-sidebar__inner {
        width: 200px;
        padding: 20px;
      }
    </style>
    `;
  }
  
  htmlSidebar(){
    return `
    <div class="${this.prefix}-sidebar">
      <span class="${this.prefix}-toggle js-${this.prefix}-toggle"></span>
      <div class="${this.prefix}-sidebar__inner">
        <ul>
          <li>
            <a href="#" class="js-${this.prefix}-action" data-type="duplicate">${this.duplicateIcon} Duplicate Selected</a>
          </li>
        </ul>
      </div>
    </div>
    `;
  }
  
  generateSidebar(){
    document.querySelector('body').insertAdjacentHTML('afterbegin', this.htmlSidebar());
    document.querySelector('body').insertAdjacentHTML('afterbegin', this.styleTag());
    this.sidebar = document.querySelector(`.${this.prefix}-sidebar`);
    this.toggle = document.querySelector(`.js-${this.prefix}-toggle`);
  }
  
  getCSRFToken(){
    let csrfEl = window.top.document.querySelector('meta[name="csrf-token"')
    let token = null
    if (csrfEl) {
      this.csrfToken = csrfEl.getAttribute('content')
    } else {
      fetch(`${window.location.origin}/admin/articles`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          accept: 'text/html, application/xhtml+xml, application/xml',
          'x-shopify-web': '1',
        },
      })
      .then(res => {
        if (res.ok) {
          return res.text()
        } else {
          const err = new Error('Error fetching CSRF token.')
          err.status = 'ERROR_FETCHING_CSRF_TOKEN'
          throw err
        }
      })
      .then(data => {
        let container = window.top.document.createElement('div')
        container.innerHTML = data
        csrfEl = container.querySelector('meta[name="csrf-token"]')
        if (csrfEl) {
          this.csrfToken = csrfEl.getAttribute('content')
          const meta = window.top.document.createElement('meta')
          meta.setAttribute('name', 'csrf-token')
          meta.setAttribute('content', token)
          window.top.document.querySelector('head').appendChild(meta)
        } else {
          return;
        }
        container.remove()
        container = null
      })
    }
  }

  postRequest(url, method, body){
    return fetch(`/admin/api/2020-07/${url}`, {
      method: method,
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'x-csrf-token': this.csrfToken
      },
      credentials: 'include',
      body: JSON.stringify(body)
    }).then(r => {
      console.log(r.headers.get('link'));
      return r.json()
    }).then(res => res).catch(e => e.json())
  }
  
  getRequest(url, method){
    return fetch(`/admin/api/2020-07/${url}`, {
      method: method,
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'x-csrf-token': this.csrfToken
      },
      credentials: 'include'
    }).then(r => {
      console.log(r.headers.get('link'));
      return r.json()
    }).then(res => res).catch(e => e.json())
  }
}

const shopifyUtils = new ShopifyUtils();
shopifyUtils.init();