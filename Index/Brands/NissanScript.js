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
        '/siteEmpresa/Index/img/NissanImg/GTR.jpg',
        '/SiteEmpresa/Index/img/NissanImg/GTR1.jpg',
        '/siteEmpresa/Index/img/NissanImg/GTR2.jpg',
        '/siteEmpresa/Index/img/NissanImg/GTR3.jpg',
        '/siteEmpresa/Index/img/NissanImg/GTR4.jpg',
        '/siteEmpresa/Index/img/NissanImg/GTR5.jpg',
        '/siteEmpresa/Index/img/NissanImg/GTR6.jpg',
        '/siteEmpresa/Index/img/NissanImg/GTR7.jpg',
    ]);

    createCarousel('carousel2', [
        '/siteEmpresa/Index/img/NissanImg/R34.jpg',
        '/SiteEmpresa/Index/img/NissanImg/R341.jpg',
        '/siteEmpresa/Index/img/NissanImg/R342.jpg',
        '/siteEmpresa/Index/img/NissanImg/R343.jpg',
        '/siteEmpresa/Index/img/NissanImg/R344.jpg',
        '/siteEmpresa/Index/img/NissanImg/R345.jpg',
        '/siteEmpresa/Index/img/NissanImg/R346.jpg',
        '/siteEmpresa/Index/img/NissanImg/R347.jpg',
        '/siteEmpresa/Index/img/NissanImg/R348.jpg',
    ]);

    createCarousel('carousel3', [
        '/siteEmpresa/Index/img/NissanImg/Armada.jpg',
        '/SiteEmpresa/Index/img/NissanImg/Armada1.jpg',
        '/siteEmpresa/Index/img/NissanImg/Armada2.jpg',
        '/siteEmpresa/Index/img/NissanImg/Armada3.jpg',
        '/siteEmpresa/Index/img/NissanImg/Armada4.jpg',
        '/siteEmpresa/Index/img/NissanImg/Armada5.jpg',
        '/siteEmpresa/Index/img/NissanImg/Armada6.jpg',
        '/siteEmpresa/Index/img/NissanImg/Armada7.jpg',
        '/siteEmpresa/Index/img/NissanImg/Armada8.jpg',
    ]);

    createCarousel('carousel4', [
        '/siteEmpresa/Index/img/NissanImg/370Z.jpg',
        '/SiteEmpresa/Index/img/NissanImg/370Z1.jpg',
        '/siteEmpresa/Index/img/NissanImg/370Z2.jpg',
        '/siteEmpresa/Index/img/NissanImg/370Z3.jpg',
        '/siteEmpresa/Index/img/NissanImg/370Z4.jpg',
        '/siteEmpresa/Index/img/NissanImg/370Z5.jpg',
        '/siteEmpresa/Index/img/NissanImg/370Z6.jpg',
    ]);
});

document.getElementById("theme-switcher").addEventListener("click", toggleTheme);