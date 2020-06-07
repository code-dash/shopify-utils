function toggleSidebar(){
  this.toggle.addEventListener('click', () => {
    this.sidebar.classList.toggle(this.activeClass)
    this.toggle.classList.toggle(this.activeClass)
    this.sidebar.querySelector(`.shopify_utils-modals`).innerHTML = '';
  })
}

module.exports = toggleSidebar;