// Array mit den Bilddateinamen aus dem Verzeichnis "pix"
const imageUrls = [
    "pix/Resize_20241108_181342_2357.jpg",
    "pix/Resize_20241108_181342_2907.jpg",
    "pix/Resize_20241108_181343_3317.jpg",
    "pix/Resize_20241108_181344_4120.jpg",
    "pix/Resize_20241108_181344_4719.jpg",
    "pix/Resize_20241108_181345_5167.jpg",
    "pix/Resize_20241108_181347_7213.jpg",
    "pix/Resize_20241108_181348_8159.jpg",
    "pix/Resize_20241108_181349_9639.jpg",
    "pix/Resize_20241108_181350_0198.jpg",
    "pix/Resize_20241108_181351_1007.jpg",
    "pix/Resize_20241108_181351_1419.jpg",
    "pix/Resize_20241108_181351_1824.jpg",
    "pix/Resize_20241108_181352_2264.jpg",
    "pix/Resize_20241108_181352_2607.jpg",
    "pix/Resize_20241108_181353_3025.jpg",
    "pix/Resize_20241108_181353_3651.jpg",
    "pix/Resize_20241108_181353_3985.jpg",
    "pix/Resize_20241108_181354_4290.jpg",
    "pix/Resize_20241108_181354_4811.jpg",
    "pix/Resize_20241108_181354_4998.jpg",
    "pix/Resize_20241108_181355_5719.jpg",
    "pix/Resize_20241108_181356_6125.jpg",
    "pix/Resize_20241108_181356_6335.jpg",
    "pix/Resize_20241108_181356_6982.jpg",
    "pix/Resize_20241108_181357_7394.jpg",
    "pix/Resize_20241108_181357_7763.jpg",
    "pix/Resize_20241108_181358_8238.jpg",
    "pix/Resize_20241108_181358_8527.jpg"
];
let currentIndex = 0;

// Initialisiere die Galerie
function initGallery() {
    const thumbnailContainer = document.getElementById('thumbnails');
    imageUrls.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        img.classList.add('thumbnail');
        img.onclick = () => displayImage(index);
        thumbnailContainer.appendChild(img);
    });
    displayImage(currentIndex);
}

// Bild im Anzeigefenster anzeigen
function displayImage(index) {
    currentIndex = index;
    const displayImage = document.getElementById('display-image');
    displayImage.src = imageUrls[currentIndex];
}

// Nächstes Bild anzeigen
function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    displayImage(currentIndex);
}

// Vorheriges Bild anzeigen
function prevImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    displayImage(currentIndex);
}

// Event Listener für Vor- und Zurück-Buttons
document.getElementById('next-display').addEventListener('click', nextImage);
document.getElementById('prev-display').addEventListener('click', prevImage);

// Funktion zum Setzen der Hintergrundfarbe
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color); // Speichert die Farbe in Local Storage
}

// Funktion zum Laden der gespeicherten Hintergrundfarbe beim Seitenaufruf
function loadBackgroundColor() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        setBackgroundColor(savedColor);
    } else {
        // Setzt die Standardfarbe (erste Farbe im Selector)
        const defaultColor = document.querySelector('.color-square').getAttribute('data-color');
        setBackgroundColor(defaultColor);
    }
}

// Event Listener für die Farbwahl
function initColorSelector() {
    const colorSquares = document.querySelectorAll('.color-square');
    colorSquares.forEach(square => {
        square.addEventListener('click', () => {
            const selectedColor = square.getAttribute('data-color');
            setBackgroundColor(selectedColor);
        });
    });
}

// Initialisierung beim Laden der Seite
window.addEventListener('DOMContentLoaded', () => {
    loadBackgroundColor();
    initColorSelector();
    initGallery();
});
