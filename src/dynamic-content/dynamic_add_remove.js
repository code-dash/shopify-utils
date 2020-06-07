export function dynamicAdd(){
  this.sidebar.addEventListener('click', (e) => {
    const target = e.target;
    if(target.classList.contains(`dynamic-row__clone`)){
      document.querySelector('.js-shopify_utils-dynamic-rows').insertAdjacentHTML('beforeend', this.dynamicRow())
    }
  })
}

export function dynamicRemove(){
  this.sidebar.addEventListener('click', (e) => {
    const target = e.target;
    if(target.classList.contains(`dynamic-row__remove`)){
      target.closest('.dynamic-row').remove();
    }
  })
}