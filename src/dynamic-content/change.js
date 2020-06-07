export default function conditionPopulate(ele){
  const conditions = ele.selectedOptions[0].getAttribute('data-conditions').split(',');
  ele.nextElementSibling.innerHTML = '';
  conditions.forEach(item => {
    const itemArr = Object.entries(item);
    ele.nextElementSibling.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option>`);
  })
}