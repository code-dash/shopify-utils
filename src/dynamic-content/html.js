import { conditions, options } from './options';
import initCodeEditor from './code-editor';

export function dynamicContentHTML(){
  return `
    <div class="${this.prefix}-dynamic-content ${this.prefix}-sidepanel">
      <span class="${this.prefix}-sidepanel__close"></span>
      <form class="js-${this.prefix}-dynamic-form">
        <div class="condition-holder">
          <h4>Conditions</h4>
          <div class="condition-type">
            <label>
              <input type="radio" name="condition-type" checked value="and"> AND
            </label>
            <label>
              <input type="radio" name="condition-type" value="or"> OR
            </label>
          </div>
          <div class="js-${this.prefix}-dynamic-rows">
            ${this.dynamicRow()}
          </div>
          <div class="condition-response"></div>
          <button type="button" class="btn js-start-conditions">Get Objects</button>
        </div>
        <div class="response-holder">
          <button type="button" class="btn btn--reveal js-reveal-conditions">Reveal Conditions</button>
          <h4>Response</h4>
          <div class="response-holder__inner">
          </div>
          <button type="button" class="btn btn--next js-next">Next</button>
        </div>
        <div class="target-holder">
          <h4>Target</h4>
          <div class="js-${this.prefix}-option-row ${this.prefix}-option-row">
            ${this.generateOptionType()}
            <select class="dynamic-option-method"></select>
          </div>
          <div class="io-row">
            <input class="input-field" value="" placeholder="">
            <input class="output-field" value="" placeholder="">
            ${codeEditorWrapper()}
            <button type="button" class="btn js-start-dynamic">Start</button>
          </div>
        </div>
      
    </div>
  `;
}

function codeEditorWrapper(){
  return `<div class="code-editor-wrapper">
    <div class="notice">
      <h4>Custom code execution</h4>
      <p class="red-text">The field below accepts any valid Javascript code, don't use it if you don't know how to write it properly!</p>
    </div>
    <textarea class="code-editor"></textarea>
    <h5>Legend</h5>
    <pre><strong>shopifyUtils.filteredItems</strong> - this is the array of the found results from the conditions. You can loop it and do what ever you like.</pre>
    <pre><strong>shopifyUtils.postRequest(url, method, body)</strong> - this is the post method that you can use (it includes the CSRF token that you need to make a request). It accepts 3 arguments. 
    * URL - the part after the API version, for example "products.json"
    * METHOD - it can be POST/PUT/DELETE
    * BODY - the item body that you must get from shopifyUtils.filteredItems for the specific index</pre>
    <pre><strong>Ctrl+Space</strong> - this is the combination you can use to autocomplete javascript methods</pre>
    <pre><strong>F11</strong> - when you are focused in the textarea you can press F11 to go fullscreen for the code editor</pre>
  </div>`
}

export function dynamicRow(){
  return `
    <div class="dynamic-row">
      <div class="dynamic-row__cta">
        <span class="dynamic-row__clone"></span>
        <span class="dynamic-row__remove"></span>
      </div>
      ${this.generateConditionType()}
      <select class="dynamic-condition"></select>
      <input type="text" class="dynamic-check" value="" />
    </div>
  `
}

export function appendDynamicContentHTML(){
  const currentPage = this.getCurrentPageType();
  if(currentPage[0] === 'navigation' || currentPage[0] === 'order' || currentPage[0] === 'orders'){
    return;
  }
  this.sidebar.querySelector(`.${this.prefix}-modals`).innerHTML = this.dynamicContentHTML();
  this.customCode = initCodeEditor();
  this.conditionEvents();
  this.startUpdate();
}

export function generateConditionType(){
  const currentPage = this.getCurrentPageType();
  const conditionsFilter = conditions.filter(item => item.scope.indexOf(currentPage[0]) > -1)
  const htmlOptions =  conditionsFilter.map(item => `<option value="${item.target}" data-conditions="${item.methods.join(',')}">${item.name}</option>`);
  return `<select class="dynamic-type" onchange="shopifyUtils.conditionPopulate(this)"><option disabled selected>Choose Type</option>${htmlOptions.join('')}</select>`;
}

export function generateOptionType(){
  const currentPage = this.getCurrentPageType();
  const optionsFilter = options.filter(item => item.scope.indexOf(currentPage[0]) > -1);
  const htmlOptions =  optionsFilter.map(item => `<option value="${item.target}" data-conditions="${item.methods.join(',')}">${item.name}</option>`);
  return `<select class="dynamic-option-type" onchange="shopifyUtils.conditionPopulate(this)"><option disabled selected>Choose Type</option>${htmlOptions.join('')}</select>`;
}
