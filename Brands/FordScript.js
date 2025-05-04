// =================== UTILITÁRIOS ===================
function createElementWithAttributes(tag, attributes = {}) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
}

// =================== BOTÃO VOLTAR ===================
function createBackButton() {
    const div = document.getElementById("backButton");
    const button = document.createElement('button');
    button.onclick = () => window.location.href = "/SiteEmpresa/Index/index.html#carouselContainer";

    const img = createElementWithAttributes('img', {
        src: "/SiteEmpresa/Index/img/HomeWhite.png",
        alt: "Ícone de Voltar"
    });

    button.appendChild(img);
    div.appendChild(button);
}

// =================== TEMA ===================
function setThemeStyles(theme) {
    const root = document.documentElement;
    const backButtonImage = document.querySelector("#backButton img");

    const themes = {
        dark: {
            '--current-theme': 'dark',
            '--background-color': 'var(--black-color)',
            '--font-color': 'var(--white-font-color)',
            '--border-color': 'var(--white-color)',
            imgSrc: "/SiteEmpresa/Index/img/HomeWhite.png"
        },
        light: {
            '--current-theme': 'light',
            '--background-color': 'var(--white-color)',
            '--font-color': 'var(--black-font-color)',
            '--border-color': 'var(--black-font-color)',
            imgSrc: "/SiteEmpresa/Index/img/HomeBlack.png"
        }
    };

    const selected = themes[theme];

    Object.entries(selected).forEach(([prop, val]) => {
        if (prop.startsWith('--')) root.style.setProperty(prop, val);
    });

    if (backButtonImage) backButtonImage.src = selected.imgSrc;
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setThemeStyles(newTheme);
}

function applyTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    setThemeStyles(theme);
}

// =================== BOTÃO "VER MAIS" ===================
function setupSeeMoreButtons() {
    const buttons = document.querySelectorAll('.seeMoreButton');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const hiddenText = button.nextElementSibling;
            const isHidden = hiddenText.style.display === 'none' || hiddenText.style.display === '';
            hiddenText.style.display = isHidden ? 'block' : 'none';
            button.textContent = isHidden ? 'Ver Menos' : 'Ver Mais';
        });
    });
}

// =================== BOTÃO INICIAR ===================
function setupStartButton() {
    const startButton = document.querySelector('#startButton');
    if (startButton) {
        startButton.onclick = () => window.location.href = "#background-img";
    }
}

// =================== CARROSSEL ===================
function createCarousel(containerId, images) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    const carouselImages = document.createElement('div');
    carouselImages.classList.add('carousel-images');

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        carouselImages.appendChild(img);
    });

    const prevButton = document.createElement('button');
    prevButton.classList.add('carousel-control', 'prev');
    prevButton.textContent = '‹';

    const nextButton = document.createElement('button');
    nextButton.classList.add('carousel-control', 'next');
    nextButton.textContent = '›';

    carousel.appendChild(carouselImages);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);
    container.appendChild(carousel);

    let index = 0;
    const totalImages = images.length;

    function updateCarousel() {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index + 1) % totalImages;
        updateCarousel();
    });
}

// =================== INICIALIZAÇÃO ===================
document.addEventListener('DOMContentLoaded', () => {
    createBackButton();
    applyTheme();
    setupSeeMoreButtons();
    setupStartButton();


    createCarousel('carousel1', [
        '/SiteEmpresa/Index/img/FordImg/GTD.jpg',
        '/siteEmpresa/Index/img/FordImg/GTD1.jpg',
        '/siteEmpresa/Index/img/FordImg/GTD2.jpg',
        '/siteEmpresa/Index/img/FordImg/GTD3.jpg',
        '/siteEmpresa/Index/img/FordImg/GTD4.jpg',
        '/siteEmpresa/Index/img/FordImg/GTD5.jpg',
        '/siteEmpresa/Index/img/FordImg/GTD6.jpg',
        '/SiteEmpresa/Index/img/FordImg/GTD7.jpg',
        '/SiteEmpresa/Index/img/FordImg/GTD8.jpg',
    ]);

    createCarousel('carousel2', [
        '/SiteEmpresa/Index/img/FordImg/Mustang1.png',
        '/siteEmpresa/Index/img/FordImg/Mustang2.png',
        '/siteEmpresa/Index/img/FordImg/Mustang3.png',
        '/siteEmpresa/Index/img/FordImg/Mustang4.png',
        '/siteEmpresa/Index/img/FordImg/Mustang5.png',
        '/siteEmpresa/Index/img/FordImg/Mustang6.png',
        '/siteEmpresa/Index/img/FordImg/Mustang7.png',
        '/SiteEmpresa/Index/img/FordImg/Mustang8.png',
        '/SiteEmpresa/Index/img/FordImg/Mustang9.png',
    ]);

    createCarousel('carousel3', [
        '/SiteEmpresa/Index/img/FordImg/Focus.jpg',
        '/siteEmpresa/Index/img/FordImg/Focus1.jpg',
        '/siteEmpresa/Index/img/FordImg/Focus2.jpg',
        '/siteEmpresa/Index/img/FordImg/Focus3.jpg',
        '/siteEmpresa/Index/img/FordImg/Focus4.jpg',
        '/siteEmpresa/Index/img/FordImg/Focus5.jpg',
        '/siteEmpresa/Index/img/FordImg/Focus6.jpg',
    ]);

    createCarousel('carousel4', [
        '/SiteEmpresa/Index/img/FordImg/GT.png',
        '/siteEmpresa/Index/img/FordImg/GT1.png',
        '/siteEmpresa/Index/img/FordImg/GT3.png',
        '/siteEmpresa/Index/img/FordImg/GT4.png',
        '/siteEmpresa/Index/img/FordImg/GT5.png',
        '/siteEmpresa/Index/img/FordImg/GT6.png',
        '/siteEmpresa/Index/img/FordImg/GT7.png',
    ]);
});

document.getElementById("theme-switcher").addEventListener("click", toggleTheme);