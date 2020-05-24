function toggleSidebar(){
  this.toggle.addEventListener('click', () => {
    this.sidebar.classList.toggle(this.activeClass)
    this.toggle.classList.toggle(this.activeClass)
  })

  document.addEventListener('keyup', (e) =>{
    if(e.keyCode == '27') {
      this.sidebar.classList.remove(this.activeClass)
      this.toggle.classList.remove(this.activeClass)
    }
  })
}

module.exports = toggleSidebar;