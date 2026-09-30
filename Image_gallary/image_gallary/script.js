let currentImage = 0;

const images = document.querySelectorAll(".image-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");


// Open Lightbox

images.forEach((image, index) => {

    image.addEventListener("click", function () {

        currentImage = index;

        lightboxImage.src = image.src;

        lightbox.style.display = "flex";

    });

});


// Close Lightbox

function closeLightbox() {

    lightbox.style.display = "none";

}


// Next Image

function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {

        currentImage = 0;

    }

    lightboxImage.src = images[currentImage].src;

}


// Previous Image

function previousImage() {

    currentImage--;

    if (currentImage < 0) {

        currentImage = images.length - 1;

    }

    lightboxImage.src = images[currentImage].src;

}


// Filter Images

function filterImages(category) {

    const cards = document.querySelectorAll(".image-card");

    cards.forEach(card => {

        if (
            category === "all" ||
            card.classList.contains(category)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}