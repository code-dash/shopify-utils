function clickEvent(){
  const self = this;
  document.querySelector('.js-shopify_utils-action').addEventListener('click', function(e) {
    e.preventDefault();
    const type = this.getAttribute('data-type');
    const currentPage = self.getCurrentPageType();
    const supportDuplicatePages = ['product', 'products', 'collection', 'collections', 'page', 'pages', 'article', 'articles', 'blog', 'blogs', 'navigation'];
    if(supportDuplicatePages.indexOf(currentPage) === -1){
      alert('Not Supported for duplication');
      return;
    } 
    self[type]();
  })
}

module.exports = clickEvent;