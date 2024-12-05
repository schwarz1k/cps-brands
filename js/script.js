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

function swiperInit () {
    new Swiper('.swiper-container', {
        cssMode: 'true',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                enabled: true,
                slidesPerView: 1.15,
                spaceBetween: 16,
            },
            768: {
                enabled: false,
                slidesPerView: 'auto',
                spaceBetween: 'auto',
            }
        }
    });
}

swiperInit();
showElements();
