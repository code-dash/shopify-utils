export default function conditionEvents(){
  this.sidebar.addEventListener('click', async (e) => {
    const target = e.target;
    if(target.classList.contains(`js-start-conditions`)){
      const type = document.querySelector('.dynamic-type').value;
      const condition = document.querySelector('.dynamic-condition').value;
      const checkValue = document.querySelector('.dynamic-check').value;
      const orAnd = document.querySelector('[name="condition-type"]').value;
      if(type !== '' && condition !== '' && checkValue !== ''){
        const obj = {
          type,
          condition,
          checkValue,
          orAnd
        }
        this.allItems = [];
        const currentPage = this.getCurrentPageType();
        await this.getRequestAll(`${currentPage[1]}.json?limit=250`);
      } else {
        alert("Please set all conditions")
      }
    }
  })
}