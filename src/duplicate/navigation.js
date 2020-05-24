function duplicate_navigation(){
  const links = [];
  document.querySelectorAll('.js-menu-resource').forEach(item => {
    const menuObject = JSON.parse(item.getAttribute('data-menu-item'));
    menuObject.action = 'create';
    links.push(menuObject)
  })
  this.createMenu(links)
}

module.exports = duplicate_navigation;