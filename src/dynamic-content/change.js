export default function conditionPopulate(ele){
  const conditions = ele.selectedOptions[0].getAttribute('data-conditions').split(',');
  ele.nextElementSibling.innerHTML = '';
  conditions.forEach(item => {
    ele.nextElementSibling.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option>`);
    if(ele.nextElementSibling.classList.contains('dynamic-option-method')){
      const optionRow = this.sidebar.querySelector('.target-holder');
      const type = document.querySelector('.dynamic-option-method').value;
      if(type === 'Lowercase' || type === 'Uppercase'){
        optionRow.setAttribute('data-type', 'none');
      } else if (type === 'Custom Code'){
        optionRow.setAttribute('data-type', 'custom-code');
      } else if (type === 'Insert before' || type === 'Insert after' || type === 'Add' || type === 'Remove'){
        optionRow.setAttribute('data-type', 'insert');
      } else {
        optionRow.setAttribute('data-type', 'io-fields');
      }
    }
  })
}