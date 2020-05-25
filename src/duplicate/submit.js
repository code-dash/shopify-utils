export default function duplicateSubmit(){
  const self = this;
  const currentPage = this.getCurrentPageType();
  
  this.sidebar.querySelector(`.js-${this.prefix}-duplicate-form`).addEventListener('submit', async function(e){
    e.preventDefault();
    const itemArray = await self.getSelectedItems();
    let checkboxes = [];

    this.querySelectorAll('input[name="duplicate"]:checked').forEach(item => {
      checkboxes.push(item.value);
    })

    for (let index = 0; index < itemArray.length; index++) {
      const element = itemArray[index];
      let metafieldUlr = `${element.id}/metafields.json`;
      delete element.id;
      delete element.handle;
      delete element.admin_graphql_api_id;
      delete element.updated_at;
      
      if(currentPage === 'collection' || currentPage === 'collections'){
        if(checkboxes.indexOf('metafield') > -1){
          const metaModified = await self.extractMetafields(`collections/${metafieldUlr}`)
          element.metafields = metaModified;
        }
        await self.duplicate_collection(element);
      } else if(currentPage === 'product' || currentPage === 'products'){
        if(checkboxes.indexOf('metafield') > -1){
          const metaModified = await self.extractMetafields(`products/${metafieldUlr}`)
          element.metafields = metaModified;
        }
        await self.duplicate_product(element)
      } else if(currentPage === 'page' || currentPage === 'pages'){
        if(checkboxes.indexOf('metafield') > -1){
          const metaModified = await self.extractMetafields(`page/${metafieldUlr}`)
          element.metafields = metaModified;
        }
        await self.duplicate_page(element)
      } else if(currentPage === 'blog' || currentPage === 'blogs'){
        if(checkboxes.indexOf('metafield') > -1){
          const metaModified = await self.extractMetafields(`blogs/${metafieldUlr}`)
          element.metafields = metaModified;
        }
        await self.duplicate_blog(element)
      } else if(currentPage === 'article' || currentPage === 'articles'){
        if(checkboxes.indexOf('metafield') > -1){
          const metaModified = await self.extractMetafields(`articles/${metafieldUlr}`)
          element.metafields = metaModified;
        }
        await self.duplicate_article(element)
      } 
    }
    
    if(currentPage === 'navigation') {
      await self.duplicate_navigation()
    }

    alert('Done!')
  })
}