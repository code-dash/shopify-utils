function getSelectedInpus(){
  const currentPage = this.getCurrentPageType()[0];
  let ids = [];
  if(currentPage === 'product' || currentPage === 'collection' || currentPage === 'page' || currentPage === 'order' || currentPage === 'blog' || currentPage === 'article' || currentPage === 'navigation'){
    const id = window.location.pathname.split('/').pop();
    ids.push(id);
  } else if(currentPage === 'products'){
    document.querySelectorAll(`input[type="checkbox"][id*=ResourceListItemCheckbox]:checked`).forEach(item => {
      const parent = item.closest('[id*="gid://shopify/Product/"]');
      const id = parent.getAttribute('id').split('/').pop();
      ids.push(id);
    })
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
  } else if(currentPage === 'blogs'){
    document.querySelectorAll(`.selected input[type="checkbox"]:checked`).forEach(item => {
      const id = item.getAttribute('id').split('blog_ids_').pop();
      ids.push(id);
    })
  } else if(currentPage === 'articles'){
    document.querySelectorAll(`.selected input[type="checkbox"]:checked`).forEach(item => {
      const id = item.value;
      ids.push(id);
    })
  }
  return ids;
}

module.exports = getSelectedInpus;