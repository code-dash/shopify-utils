export default function duplicate(){
  const currentPage = this.getCurrentPageType()[0];
  this.appendHTML(currentPage);
  this.sidebar.querySelector(`.${this.prefix}-duplicate-html`).classList.add(this.activeClass);
}
