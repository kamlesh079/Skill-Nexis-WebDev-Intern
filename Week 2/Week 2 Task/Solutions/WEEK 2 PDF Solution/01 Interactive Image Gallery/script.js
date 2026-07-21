// Grab DOM elements
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Open Lightbox on Image Click
galleryItems.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    });
});

// Close Lightbox function
const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore background scrolling
};

// Event Listeners for closing
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    // Only close if user clicks the backdrop overlay, not the image itself
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close using 'Escape' key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});
