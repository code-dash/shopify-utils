export default function dynamic(){
  this.sidebar.querySelector(`.${this.prefix}-dynamic-content`).classList.add(this.activeClass);
  this.appendDynamicContentHTML();
}