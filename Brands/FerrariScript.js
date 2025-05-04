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
        '/siteEmpresa/Index/img/FerrariImg/Superfast.jpg',
        '/SiteEmpresa/Index/img/FerrariImg/Superfast1.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Superfast2.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Superfast3.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Superfast8.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Superfast4.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Superfast7.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Superfast5.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Superfast6.jpg',
    ]);

    createCarousel('carousel2', [
        '/siteEmpresa/Index/img/FerrariImg/PuroSangue.jpg',
        '/SiteEmpresa/Index/img/FerrariImg/PuroSangue1.jpg',
        '/siteEmpresa/Index/img/FerrariImg/PuroSangue2.jpg',
        '/siteEmpresa/Index/img/FerrariImg/PuroSangue3.jpg',
        '/siteEmpresa/Index/img/FerrariImg/PuroSangue4.jpg',
        '/siteEmpresa/Index/img/FerrariImg/PuroSangue5.jpg',
        '/siteEmpresa/Index/img/FerrariImg/PuroSangue6.jpg',
        '/siteEmpresa/Index/img/FerrariImg/PuroSangue7.jpg',
        '/siteEmpresa/Index/img/FerrariImg/PuroSangue8.jpg',
        '/siteEmpresa/Index/img/FerrariImg/PuroSangue9.jpg',
        '/siteEmpresa/Index/img/FerrariImg/PuroSangue10.jpg',
    ]);

    createCarousel('carousel3', [
        '/siteEmpresa/Index/img/FerrariImg/Italia.jpg',
        '/SiteEmpresa/Index/img/FerrariImg/Italia1.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Italia2.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Italia3.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Italia4.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Italia5.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Italia6.jpg',
        '/siteEmpresa/Index/img/FerrariImg/Italia7.jpg',
    ]);

    createCarousel('carousel4', [
        '/siteEmpresa/Index/img/FerrariImg/LaFerrari2.jpg',
        '/SiteEmpresa/Index/img/FerrariImg/LaFerrari1.jpg',
        '/siteEmpresa/Index/img/FerrariImg/LaFerrari3.jpg',
        '/siteEmpresa/Index/img/FerrariImg/LaFerrari4.jpg',
        '/siteEmpresa/Index/img/FerrariImg/LaFerrari5.jpg',
        '/siteEmpresa/Index/img/FerrariImg/LaFerrari6.jpg',
        '/siteEmpresa/Index/img/FerrariImg/LaFerrari7.jpg',
        '/siteEmpresa/Index/img/FerrariImg/LaFerrari7.jpg',
    ]);
});

document.getElementById("theme-switcher").addEventListener("click", toggleTheme);