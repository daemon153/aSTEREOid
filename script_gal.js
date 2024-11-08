// Array mit Bild-URLs
const imageUrls = [
    "https://drive.google.com/uc?id=19qwqNSMPt5NdY4iB5Ebv0mVNs10CZRqZ",
    "https://drive.google.com/uc?id=19pGUm3zY3Gakar6rtrY0WW_E86yQn1pQ",
    "https://drive.google.com/uc?id=18rAihBXaCp1ysgi7zUNuJRzxfO0NkTkT",
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
