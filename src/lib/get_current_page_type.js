function getCurrentPageType() {
  if(window.location.pathname.match(/\/admin\/products\/\d+/)){
    return ['product', 'products', 'duplicate_product'];
  } else if(window.location.pathname.match(/\/admin\/products$/)){
    return ['products', 'products', 'duplicate_product'];
  } else if(window.location.pathname.match(/\/admin\/collections\/\d+/)){
    return ['collection', 'collections', 'duplicate_collection'];
  } else if(window.location.pathname.match(/\/admin\/collections$/)) {
    return ['collections', 'collections', 'duplicate_collection'];
  } else if(window.location.pathname.match(/\/admin\/pages\/\d+/)){
    return ['page', 'pages', 'duplicate_page'];
  } else if(window.location.pathname.match(/\/admin\/pages$/)){
    return ['pages', 'pages', 'duplicate_page'];
  } else if(window.location.pathname.match(/\/admin\/orders\/\d+/)){
    return ['order', 'orders'];
  } else if(window.location.pathname.match(/\/admin\/orders$/)){
    return ['orders', 'orders'];
  } else if(window.location.pathname.match(/\/admin\/articles/)){
    return ['articles', 'articles', 'duplicate_article'];
  } else if(window.location.pathname.match(/\/admin\/blogs\/\d+\/articles\/\d+$/)){
    return ['article', 'articles', 'duplicate_article'];
  } else if(window.location.pathname.match(/\/admin\/blogs/)){
    return ['blogs', 'blogs', 'duplicate_blog'];
  } else if(window.location.pathname.match(/\/admin\/blogs\/\d+$/)){
    return ['blog', 'blogs', 'duplicate_blog'];
  } else if(window.location.pathname.match(/\/admin\/menus\/\d+$/)){
    return ['navigation', 'menus'];
  }
}

module.exports = getCurrentPageType;