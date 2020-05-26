import options from './options';

function handleCheckboxes(currentPage){
  const option = options.filter(item => item.type.indexOf(currentPage) > -1);
  const checkboxes = option.pop().checkboxes;
  return checkboxes.map(item => {
    const itemArr = Object.entries(item)[0];
    return`<li><label><input type="checkbox" name="duplicate" value="${itemArr[0]}" />${itemArr[1]}</label></li>`;
  }).join('')
}

export function appendHTML(currentPage){
  document.querySelector(`.shopify_utils-modals`).innerHTML = `
  <div class="shopify_utils-duplicate-html shopify_utils-sidepanel">
    <span class="shopify_utils-sidepanel__close"></span>
    <form class="js-shopify_utils-duplicate-form">
      <ul class="js-shopify_utils-duplicate-checkboxes">
        ${handleCheckboxes(currentPage)}
      </ul>
      <button type="submit" class="btn">Start</button>
    </form>
  </div>
`;
}