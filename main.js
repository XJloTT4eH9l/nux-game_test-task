import './style.scss'

const accordionItems = document.querySelectorAll(".faq__accordion");
const burger = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.header-mobile-menu');

//faq
for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener("click", function() {
        for (let j = 0; j < accordionItems.length; j++) {
            if (i !== j) {
                accordionItems[j].classList.remove("faq__accordion--active");
                const open = accordionItems[j].querySelector('.faq__open');
                const title = accordionItems[j].querySelector('.faq__title');
                const panel = accordionItems[j].nextElementSibling;
                panel.style.maxHeight = null;
                open.innerHTML = '+';
                open.classList.remove('faq__open--active');
                title.classList.remove('faq__title--active');
            }
        }

        this.classList.toggle("faq__accordion--active");
        const open = this.querySelector('.faq__open');
        const title = this.querySelector('.faq__title');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            open.innerHTML = '+';
            open.classList.remove('faq__open--active');
            title.classList.remove('faq__title--active');
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            open.innerHTML = '-';
            open.classList.add('faq__open--active');
            title.classList.add('faq__title--active');
        }
    });
}

//slider
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 22,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 4,
        }
    }
});

//mobile menu
burger.addEventListener('click', () => {
    burger.classList.toggle('burger-menu--active');
    mobileMenu.classList.toggle('header-mobile-menu--active');
    if(mobileMenu.classList.contains('header-mobile-menu--active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
})
