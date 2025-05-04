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
        '/SiteEmpresa/Index/img/BMWImg/X6M.png',
        '/SiteEmpresa/Index/img/BMWImg/X6M1.png',
        '/siteEmpresa/Index/img/BMWImg/X6M2.png',
        '/siteEmpresa/Index/img/BMWImg/X6M3.png',
        '/siteEmpresa/Index/img/BMWImg/X6M4.png',
        '/siteEmpresa/Index/img/BMWImg/X6M5.png',
        '/siteEmpresa/Index/img/BMWImg/X6M6.png',
        '/siteEmpresa/Index/img/BMWImg/X6M7.png',
        '/SiteEmpresa/Index/img/BMWImg/X6M8.png',
    ]);

    createCarousel('carousel2', [
        '/SiteEmpresa/Index/img/BMWImg/M3CS.jpg',
        '/siteEmpresa/Index/img/BMWImg/M3CS1.jpg',
        '/siteEmpresa/Index/img/BMWImg/M3CS2.jpg',
        '/siteEmpresa/Index/img/BMWImg/M3CS3.jpg',
        '/siteEmpresa/Index/img/BMWImg/M3CS4.jpg',
        '/siteEmpresa/Index/img/BMWImg/M3CS5.jpg',
        '/siteEmpresa/Index/img/BMWImg/M3CS6.jpg',
        '/siteEmpresa/Index/img/BMWImg/M3CS7.jpg',
        '/siteEmpresa/Index/img/BMWImg/M3CS8.jpg',
        '/siteEmpresa/Index/img/BMWImg/M3CS9.jpg',
        '/siteEmpresa/Index/img/BMWImg/M3CS10.jpg',
    ]);

    createCarousel('carousel3', [
        '/SiteEmpresa/Index/img/BMWImg/M8.jpg',
        '/siteEmpresa/Index/img/BMWImg/M81.jpg',
        '/siteEmpresa/Index/img/BMWImg/M82.jpg',
        '/siteEmpresa/Index/img/BMWImg/M83.jpg',
        '/siteEmpresa/Index/img/BMWImg/M84.jpg',
        '/siteEmpresa/Index/img/BMWImg/M85.jpg',
        '/siteEmpresa/Index/img/BMWImg/M86.jpg',
        '/siteEmpresa/Index/img/BMWImg/M87.jpg',
        '/siteEmpresa/Index/img/BMWImg/M88.jpg',
    ]);

    createCarousel('carousel4', [
        '/siteEmpresa/Index/img/BMWImg/M4.jpg',
        '/SiteEmpresa/Index/img/BMWImg/M41.jpg',
        '/siteEmpresa/Index/img/BMWImg/M42.jpg',
        '/siteEmpresa/Index/img/BMWImg/M43.jpg',
        '/siteEmpresa/Index/img/BMWImg/M44.jpg',
        '/siteEmpresa/Index/img/BMWImg/M45.jpg',
        '/siteEmpresa/Index/img/BMWImg/M46.jpg',
    ]);
});

document.getElementById("theme-switcher").addEventListener("click", toggleTheme);