export default function duplicate(){
  const currentPage = this.getCurrentPageType();
  this.appendHTML(currentPage);
  this.sidebar.querySelector(`.${this.prefix}-duplicate-html`).classList.add(this.activeClass);
}
