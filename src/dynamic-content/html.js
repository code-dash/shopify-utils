import options from './options';

export function dynamicContentHTML(){
  return `
    <div class="${this.prefix}-dynamic-content ${this.prefix}-sidepanel">
      <span class="${this.prefix}-sidepanel__close"></span>
      <form class="js-${this.prefix}-dynamic-form">
        <div class="js-${this.prefix}-dynamic-rows"></div>
        <button type="submit" class="btn">Start</button>
      </form>
    </div>
  `;
}

export function dynamicRow(){
  return `
    <div class="dynamic-row">
      ${this.generateType()}
      <select class="dynamic-condition"></select>
      <input type="text" value="" />
    </div>
  `
}

export function appendDynamicContentHTML(){
  const currentPage = this.getCurrentPageType();
  if(currentPage === 'navigation' || currentPage === 'order' || currentPage === 'orders'){
    return;
  }
  const dynamicRows = this.sidebar.querySelector(`.js-${this.prefix}-dynamic-rows`);
  dynamicRows.innerHTML = this.dynamicRow();
}

export function generateType(){
  const currentPage = this.getCurrentPageType();
  const optionsFilter = options.filter(item => item.scope.indexOf(currentPage) > -1).pop();
  const htmlOptions =  optionsFilter.fields.map(item => `<option value="${item.type[0]}" data-conditions="${item.conditions.join(',')}">${item.type[1]}</option>`);
  return `<select class="dynamic-type" onchange="shopifyUtils.conditionPopulate(this)"><option disabled selected>Choose Type</option>${htmlOptions.join('')}</select>`;
}
