const hamburger = document.getElementById('hamburger');
const closedMenu = document.getElementById('closed-menu');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', toggle)
closedMenu.addEventListener('click', toggle)

function toggle() {
    hamburger.classList.toggle('active');
    closedMenu.classList.toggle('active');

}