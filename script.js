const toggleButton = document.getElementsByClassName('togglebtn')[0]
const navbar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active')
})