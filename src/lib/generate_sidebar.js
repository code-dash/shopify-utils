function generateSidebar(){
  document.querySelector('body').insertAdjacentHTML('afterbegin', this.htmlSidebar());
  document.querySelector('body').insertAdjacentHTML('afterbegin', this.styleTag());
  this.sidebar = document.querySelector(`.${this.prefix}-sidebar`);
  this.toggle = document.querySelector(`.js-${this.prefix}-toggle`);
}

module.exports = generateSidebar;