function clickEvent(){
  const self = this;
  this.sidebar.querySelectorAll('.js-shopify_utils-action').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const type = this.getAttribute('data-type');
      const currentPage = self.getCurrentPageType();
      const supportDuplicatePages = ['product', 'products', 'collection', 'collections', 'page', 'pages', 'article', 'articles', 'blog', 'blogs', 'navigation'];
      if(supportDuplicatePages.indexOf(currentPage[0]) === -1){
        alert('Not Supported for duplication');
        return false;
      } 
      self[type]();
    })
  })
  
  this.sidebar.addEventListener('click', (e) => {
    const target = e.target;
    if(target.classList.contains(`${this.prefix}-sidepanel__close`)){
      this.sidebar.querySelectorAll(`.${this.prefix}-sidepanel`).forEach(item => {
        item.classList.remove(this.activeClass)
      })
    }
  })
}

module.exports = clickEvent;