export default function startUpdate(){
  this.sidebar.addEventListener('click', async (e) => {
    const target = e.target;
    if(target.classList.contains(`js-start-dynamic`)){
      const target = document.querySelector('.dynamic-option-type').value;
      const type = document.querySelector('.dynamic-option-method').value;
      const text1 = document.querySelector('.input-field').value;
      const text2 = document.querySelector('.output-field').value;
      if(target !== '' && type !== ''){
        this.methodInit(target, type, text1, text2);
      } else {
        alert("Please set all conditions")
      }
    }
  })
}