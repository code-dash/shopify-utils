function getCurrentPageType() {
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
  } else if(window.location.pathname.match(/\/admin\/articles/)){
    return 'articles';
  } else if(window.location.pathname.match(/\/admin\/blogs\/\d+\/articles\/\d+$/)){
    return 'article';
  } else if(window.location.pathname.match(/\/admin\/blogs/)){
    return 'blogs';
  } else if(window.location.pathname.match(/\/admin\/blogs\/\d+$/)){
    return 'blog';
  } else if(window.location.pathname.match(/\/admin\/menus\/\d+$/)){
    return 'navigation';
  }
}

module.exports = getCurrentPageType;