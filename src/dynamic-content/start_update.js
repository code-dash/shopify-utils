export default function startUpdate(){
  this.sidebar.addEventListener('click', async (e) => {
    const target = e.target;
    if(target.classList.contains(`js-start-dynamic`)){
      const target = document.querySelector('.dynamic-option-type').value;
      const type = document.querySelector('.dynamic-option-method').value;
      const text1 = document.querySelector('.input-field').value;
      const text2 = document.querySelector('.output-field').value;
      const dynamicEle = this.sidebar.querySelector('.js-start-dynamic');
      if(target !== '' && type !== ''){
        dynamicEle.classList.add('is-loading')
        dynamicEle.setAttribute('disabled', 'disabled')
        this.methodInit(target, type, text1, text2);
      } else {
        alert("Please set all conditions")
      }
    }
  })

  this.sidebar.addEventListener('change', (e) => {
    const target = e.target;
    if(target.classList.contains(`dynamic-option-method`)){
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