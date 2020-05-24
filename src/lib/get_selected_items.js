async function getSelectedItems(){
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

  if(currentPage === 'blog' || currentPage === 'blogs'){
    for (let index = 0; index < ids.length; index++) {
      const id = ids[index];
      item = await this.getRequest(`blogs/${id}.json`, 'GET')
      items.push(item.blog);
    }
    return items;
  }

  if(currentPage === 'article' || currentPage === 'articles'){
    for (let index = 0; index < ids.length; index++) {
      const id = ids[index];
      item = await this.getRequest(`articles/${id}.json`, 'GET')
      items.push(item.article);
    }
    return items;
  }

  return [];
}

module.exports = getSelectedItems;