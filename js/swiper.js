const watches_section = document.querySelector('.watches_section')
const watches__wrapper = document.querySelector('.watches__wrapper')
const watch__items = document.querySelectorAll('.watch__item')
const prev  = document.querySelector('.watches__swiper-button-prev')
const next = document.querySelector('.watches__swiper-button-next')

new Swiper('.articles', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 770) {
        prev.classList.add('swiper-button-prev')
        next.classList.add('swiper-button-next')
        watches_section.classList.add('swiper')
        watches__wrapper.classList.add('swiper-wrapper')
        watch__items.forEach(el => {
            el.classList.add('swiper-slide')
        })
        new Swiper('.watches_section', {
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }
        });
    } else {
        prev.classList.remove('swiper-button-prev')
        next.classList.remove('swiper-button-next')
        watches_section.classList.remove('swiper')
        watches__wrapper.classList.remove('swiper-wrapper')
        watch__items.forEach(el => {
            el.classList.remove('swiper-slide')
            el.style.width = 'auto';
        })
    }
});