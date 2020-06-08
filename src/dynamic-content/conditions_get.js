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
        const currentPage = this.getCurrentPageType();
        if(!this.allItems.length){
          await this.getRequestAll(`${currentPage[1]}.json?limit=250`);
        }
        this.filterInit();
        this.responseHolder();
      } else {
        alert("Please set all conditions")
      }
    }
  })
}