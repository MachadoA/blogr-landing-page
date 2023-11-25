const hamburger = document.getElementById('hamburger');
const closedMenu = document.getElementById('closed-menu');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');
const dropdownLinks = document.querySelectorAll('.menu-dropdown');
const iconLights = document.querySelectorAll('.icon-arrow-light');
const iconDarks = document.querySelectorAll('.icon-arrow-dark');

let screenWidth = window.innerWidth

hamburger.addEventListener('click', toggle);
closedMenu.addEventListener('click', toggle);
function toggle() {
    hamburger.classList.toggle('active');
    closedMenu.classList.toggle('active');
    nav.classList.toggle('active');
}

document.addEventListener('click', (event) => {
    const isMenuLink = event.target.closest('.menu-link');
    const isDropdown = event.target.closest('.menu-dropdown');

    if (!isMenuLink && !isDropdown) {
        hideDropdown();
    }
});


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
            iconDarks[index].classList.add('active');
            
            if (screenWidth <= 949){
                const heightNav = 270;
                const heightNavMenu = 140;
                const heightDropdown = dropdownLinks[index].offsetHeight;
    
                nav.style.height = heightNav + heightDropdown + 'px';
                navMenu.style.height = heightNavMenu + heightDropdown + 'px';
            } else {
                heightDropdown = 0
            }
        }
    });
});

function hideDropdown() {
    menuLinks.forEach(link => link.classList.remove('active'));
    dropdownLinks.forEach(dropdown => dropdown.classList.remove('active'));
    iconDarks.forEach(icon => icon.classList.remove('active'));
    iconLights.forEach(icon => icon.classList.remove('active'));
    nav.style.height = '';
    navMenu.style.height = ''; 
}
