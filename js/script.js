const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


// ТАБЫ

const lawyerstab = document.querySelectorAll(".tabs__items");
const tabContents = document.querySelectorAll(".tabs__content-item");
const practiceTabs = document.querySelectorAll(".practice__tab");
const practiceTabContents = document.querySelectorAll(".practice__content-item");

function tabs(tab, content) {
    tab.forEach(item => {
        item.addEventListener('click', function (e) {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains("active")) {
                content.forEach(item => {
                    item.classList.remove("_active");
                })
                tab.forEach(item => {
                    item.classList.remove("_active");
                })
                currentBtn.classList.add("_active");
                currentTab.classList.add("_active");
            }
        })
    })
}
tabs(lawyerstab, tabContents);
tabs(practiceTabs, practiceTabContents);



// ПОПАПЫ

let popupLinks = document.querySelectorAll('.popup__link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 800;

for (let popupLink of popupLinks) {
    popupLink.addEventListener('click', function (e) {
        let popupName = popupLink.getAttribute('href').replace('#', '');
        let curentPopup = document.getElementById(popupName);
        console.log(popupName);
        console.log(curentPopup);
        popupOpen(curentPopup);
        e.preventDefault();
    })
}
let popupCloseIcons = document.querySelectorAll('.close-popup');
for (let popupCloseIcon of popupCloseIcons) {
    popupCloseIcon.addEventListener('click', function (e) {
        popupClose(this.closest('.popup'));
        e.preventDefault();
    })
}
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        })
    }
}
function popupClose(popupActive, doUnlock = true) {
    popupActive.classList.remove('open');
}
(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();


// Аккордион

let accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(item => {
    item.addEventListener("click", function (e) {
        if (item.style.maxHeight) {
            item.style.maxHeight = null;
            console.log(item);
        } else {
            // item.style.maxHeight = 90 + 'px';
            item.style.maxHeight = item.scrollHeight + 'px';
        }
        item.classList.toggle('active');
    })
})

//Слайдеры


new Swiper('.practice-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        // type: 'fraction',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        dynamicBullets: true,
        dynamicMainBullets: 2,

    },
    slidesPerView: 1,
});


let mql = window.matchMedia('(max-width: 767px)');

window.addEventListener('resize', () => {
    if (mql.matches) {
        let newSwiper = new Swiper('.why-slider', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            // Навигация
            // Буллеты, текущее положение, прогрессбар
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                // type: 'fraction',
                clickable: true,

            },
            slidesPerView: 1,
        });
    }
})

