export default function conditionPopulate(ele){
  const conditions = ele.selectedOptions[0].getAttribute('data-conditions').split(',');
  ele.nextElementSibling.innerHTML = '';
  conditions.forEach(item => {
    ele.nextElementSibling.insertAdjacentHTML('beforeend', `<option value="item">${item}</option>`);
  })
}