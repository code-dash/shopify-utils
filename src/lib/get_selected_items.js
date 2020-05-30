async function getSelectedItems(){
  const currentPage = this.getCurrentPageType()[1];
  const ids = this.getSelectedInpus();
  const idsString = ids.join(',');
  let items = [];

  if(!ids.length) {
    alert('No items selected!')
    return;
  }

  if(currentPage == 'products' || currentPage == 'collections'){
    items = await this.getRequest(`${currentPage}?ids=${idsString}`)
    return items[currentPage];
  }

  if(currentPage === 'pages'){
    items = await this.getRequest(`pages.json?ids=${idsString}`)
    const filterItems = items.pages.filter(item => idsString.indexOf(item.id) > -1);
    return filterItems;
  }

  if(currentPage === 'blogs'){
    for (let index = 0; index < ids.length; index++) {
      const id = ids[index];
      item = await this.getRequest(`blogs/${id}.json`)
      items.push(item.blog);
    }
    return items;
  }

  if(currentPage === 'articles'){
    for (let index = 0; index < ids.length; index++) {
      const id = ids[index];
      item = await this.getRequest(`articles/${id}.json`)
      items.push(item.article);
    }
    return items;
  }

  return [];
}

module.exports = getSelectedItems;