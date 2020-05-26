export default function dynamic(){
  this.appendDynamicContentHTML();
  document.querySelector(`.${this.prefix}-dynamic-content`).classList.add(this.activeClass);
}