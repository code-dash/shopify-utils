async function duplicate(){
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
    } else if(currentPage === 'blog' || currentPage === 'blogs'){
      await this.duplicate_blog(element)
    } else if(currentPage === 'article' || currentPage === 'articles'){
      await this.duplicate_article(element)
    } 
  }
  
  if(currentPage === 'navigation') {
    await this.duplicate_navigation()
  }

  alert('Done!')
}

module.exports = duplicate;