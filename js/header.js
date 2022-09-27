const header = document.getElementById('header');
const nav_toggle = document.getElementById('nav_toggle');
let isActive = false;

const headerFixed = () => {
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.padding = '0 0';
    header.style.lineHeight = '0.8';
}

const headerAbsolute = () => {
    header.style.position = 'absolute';
    header.style.lineHeight = '1.5';
    header.style.top = '40px';
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 600) {
        headerFixed()
    } else {
        headerAbsolute()
        removeActiveClass()
    }
})

document.addEventListener('DOMContentLoaded', () => {
    window.scrollY >= 600 ? headerFixed() : 0
})

const removeActiveClass = () => {
    nav_toggle.classList.remove('active');
    header.classList.remove('active');
    isActive = false;
}

const addActiveClass = () => {
    nav_toggle.classList.add('active');
    header.classList.add('active');
    isActive = true;
}

nav_toggle.addEventListener("click", () => {
    if (isActive) {
        removeActiveClass();
    } else {
        addActiveClass();
    }
})