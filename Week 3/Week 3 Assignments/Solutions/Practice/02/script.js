const button = document.getElementById('colorBtn');

button.addEventListener('click', () => {
    // Generates a random hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = randomColor;
});