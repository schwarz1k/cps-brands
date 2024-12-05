let hiddenButton = document.querySelector(".services-brands__button");
let hiddenElement = document.querySelector(".services-brands__list");

function showElements() {
    hiddenButton.addEventListener("click", () => {
        hiddenElement.classList.toggle("services-brands__list--hidden");
        if (hiddenElement.classList.contains("services-brands__list--hidden")) {
            hiddenButton.textContent = 'Показать все';
        } else {
            hiddenButton.textContent = 'Скрыть';
        }
    });
}

function swiperMobile () {
    if (window.matchMedia("(max-width: 768px)").matches) {
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1.26,
            spaceBetween: 16,
        });
    }
}

showElements();
swiperMobile();