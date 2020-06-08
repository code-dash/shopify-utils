function responseHolder(){
  const currentPage = this.getCurrentPageType();
  const responseHolder = this.sidebar.querySelector('.response-holder__inner');
  responseHolder.innerHTML = '';
  if(this.filteredItems.length){
    this.filteredItems.forEach((item, ind) => {
      responseHolder.insertAdjacentHTML('beforeend', `<p><strong>${ind}:</strong> <a href="/admin/${currentPage[1]}/${item.id}" target="_blank">${item.title}</a><p>`)
    })
  } else {
    responseHolder.innerText = 'No results';
  }
  responseHolder.parentNode.classList.add('is-active');

  this.sidebar.querySelector('.js-next').addEventListener('click', () => {
    this.sidebar.querySelector('.condition-holder').classList.add('is-hidden');
    this.sidebar.querySelector('.target-holder').classList.add('is-active');
    this.sidebar.querySelector('.response-holder').classList.add('is-revealed');
  })

  this.sidebar.querySelector('.js-reveal-conditions').addEventListener('click', () => {
    this.sidebar.querySelector('.response-holder').classList.remove('is-revealed');
    this.sidebar.querySelector('.condition-holder').classList.remove('is-hidden');
    this.sidebar.querySelector('.target-holder').classList.remove('is-active');
  })
}

export default responseHolder;