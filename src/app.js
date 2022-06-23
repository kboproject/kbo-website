const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('menu-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)
