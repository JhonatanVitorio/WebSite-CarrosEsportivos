function createButton(text, path, imagePath, description) {
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = "flex";
    buttonContainer.style.flexDirection = "column";
    buttonContainer.style.alignItems = "center";

    const button = document.createElement('button');
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = text;

    button.appendChild(img);
    button.onclick = function () {
        window.location.href = path;
    };

    const label = document.createElement('span');
    label.textContent = text;

    const desc = document.createElement('p');
    desc.textContent = description;

    buttonContainer.appendChild(button);
    buttonContainer.appendChild(label);
    buttonContainer.appendChild(desc);

    if (window.innerWidth <= 768) {
        document.getElementById("gridButtons").appendChild(buttonContainer);
    } else {
        document.getElementById("buttons").appendChild(buttonContainer);
    }
}

function initCarousel() {
    createButton("Aston Martin", "./Brands/Aston.html", "./img/MarcasImg/AstonMartin.png");
    createButton("Audi", "./Brands/Audi.html", "./img/MarcasImg/Audi.png");
    createButton("Bentley", "./Brands/Bentley.html", "./img/MarcasImg/Bentley.png");
    createButton("BMW", "./Brands/BMW.html", "./img/MarcasImg/BMW.png");
    createButton("Bugatti", "./Brands/Bugatti.html", "./img/MarcasImg/Bugatti.png");
    createButton("Dodge", "./Brands/Dodge.html", "./img/MarcasImg/Dodge.png");
    createButton("Ferrari", "./Brands/Ferrari.html", "./img/MarcasImg/Ferrari.png");
    createButton("Ford", "./Brands/Ford.html", "./img/MarcasImg/Ford.png");
    createButton("Honda", "./Brands/Honda.html", "./img/MarcasImg/Honda.png");
    createButton("Jaguar", "./Brands/Jaguar.html", "./img/MarcasImg/Jaguar.png");
    createButton("Lamborghini", "./Brands/Lamborghini.html", "./img/MarcasImg/Lamborghini.png");
    createButton("Land Rover", "./Brands/LandRover.html", "./img/MarcasImg/Land.png");
    createButton("Maserati", "./Brands/Maserati.html", "./img/MarcasImg/Maserati.png");
    createButton("McLaren", "./Brands/McLaren.html", "./img/MarcasImg/McLaren.png");
    createButton("Mercedes Benz", "./Brands/Mercedes.html", "./img/MarcasImg/Mercedes.png");
    createButton("Nissan", "./Brands/Nissan.html", "./img/MarcasImg/Nissan.png");
    createButton("Pagani", "./Brands/Pagani.html", "./img/MarcasImg/Pagani.png");
    createButton("Porsche", "./Brands/Porsche.html", "./img/MarcasImg/Porsche.png");

    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const buttonsWrapper = document.getElementById('buttonsWrapper');

    leftArrow.onclick = function (event) {
        event.preventDefault();
        buttonsWrapper.scrollLeft -= buttonsWrapper.clientWidth / 2;
    };

    rightArrow.onclick = function (event) {
        event.preventDefault();
        buttonsWrapper.scrollLeft += buttonsWrapper.clientWidth / 2;
    };
}

document.addEventListener("DOMContentLoaded", initCarousel);

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carouselContainer");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    carousel.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.3,
        }
    );

    observer.observe(carousel);
});

const bottomButton = document.querySelector('#bottomButton');
bottomButton.onclick = function () {
    document.querySelector('#carouselContainer').scrollIntoView({ behavior: 'smooth' });
};