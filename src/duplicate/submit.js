export default function duplicateSubmit(){
  const self = this;
  const currentPage = this.getCurrentPageType();
  
  this.sidebar.addEventListener('submit', async function(e){
    e.preventDefault();
    const target = e.target;
    
    if(target.classList.contains(`js-shopify_utils-duplicate-form`)){
      const itemArray = await self.getSelectedItems();
      let checkboxes = [];

      if(!itemArray){
        return;
      }
  
      this.querySelectorAll('input[name="duplicate"]:checked').forEach(item => {
        checkboxes.push(item.value);
      })
  
      if(currentPage[0] === 'navigation') {
        await self.duplicate_navigation()
      } else {
        for (let index = 0; index < itemArray.length; index++) {
          const element = itemArray[index];
          const elementID = element.id;
          const metafieldUlr = `${element.id}/metafields.json`;
          delete element.id;
          delete element.handle;
          delete element.admin_graphql_api_id;
          delete element.updated_at;
          
          if(checkboxes.indexOf('metafield') > -1){
            const metaModified = await self.extractMetafields(`${currentPage[1]}/${metafieldUlr}`)
            element.metafields = metaModified;
          }
          if(checkboxes.indexOf('variant-metafield') > -1){
            for (let i = 0; i < element.variants.length; i++) {
              const variant = element.variants[i];
              const metaModified = await self.extractMetafields(`${currentPage[1]}/${elementID}/variants/${variant.id}/metafields.json`)
              variant.metafields = metaModified;
            }
          }
    
          await self[currentPage[2]](element);
        }
      }
  
      alert('Done!')
    }
  })
}