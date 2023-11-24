const hamburger = document.getElementById('hamburger');
const closedMenu = document.getElementById('closed-menu');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', toggle)
closedMenu.addEventListener('click', toggle)

function toggle() {
    hamburger.classList.toggle('active');
    closedMenu.classList.toggle('active');

}

const menuLinks = document.querySelectorAll('.menu-link');
const dropdownLinks = document.querySelectorAll('.menu-dropdown');
const iconLights = document.querySelectorAll('.icon-arrow-light');

function hideDropdown() {
    menuLinks.forEach(link => link.classList.remove('active'));
    dropdownLinks.forEach(dropdown => dropdown.classList.remove('active'));
    iconLights.forEach(icon => icon.classList.remove('active'));
}

menuLinks.forEach((menuLink, index) => {
    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        if (menuLink.classList.contains('active')) {
            hideDropdown();
        } else {
            hideDropdown();

            menuLink.classList.add('active');
            dropdownLinks[index].classList.add('active');
            iconLights[index].classList.add('active');
        }
    });
});


document.addEventListener('click', (event) => {
    const isMenuLink = event.target.closest('.menu-link');
    const isDropdown = event.target.closest('.menu-dropdown');

    if (!isMenuLink && !isDropdown) {
        hideDropdown();
    }
});
