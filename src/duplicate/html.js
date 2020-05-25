import options from './options';

export function duplicateHTML(){
  return `
    <div class="${this.prefix}-duplicate-html ${this.prefix}-sidepanel">
      <span class="${this.prefix}-sidepanel__close"></span>
      <form class="js-${this.prefix}-duplicate-form">
        <ul class="js-${this.prefix}-duplicate-checkboxes"></ul>
        <button type="submit" class="btn">Start</button>
      </form>
    </div>
  `;
}

export function appendHTML(currentPage){
  const option = options.filter(item => item.type.indexOf(currentPage) > -1);
  const checkboxes = option.pop().checkboxes;
  const checkboxesHolder = this.sidebar.querySelector(`.js-${this.prefix}-duplicate-checkboxes`);
  checkboxesHolder.innerHTML = '';
  checkboxes.forEach(item => {
    const itemArr = Object.entries(item)[0];
    checkboxesHolder.insertAdjacentHTML('afterbegin', `<li><label><input type="checkbox" name="duplicate" value="${itemArr[0]}" />${itemArr[1]}</label></li>`)
  })
}