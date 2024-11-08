// Array mit Bild-URLs
const imageUrls = [
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
    // Füge hier weitere Bild-URLs hinzu
];

let currentIndex = 0; // Aktuelle Bildindex

// Initialisiere Galerie mit Thumbnails
function initGallery() {
    const thumbnailContainer = document.querySelector('.thumbnails');
    
    imageUrls.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        img.classList.add('thumbnail');
        img.onclick = () => displayImage(index);
        thumbnailContainer.appendChild(img);
    });

    // Zeige das erste Bild an
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

// Galerie initialisieren
initGallery();
