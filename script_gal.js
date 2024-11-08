// Funktion, um die Hintergrundfarbe aus dem Local Storage zu laden und anzuwenden
function applyBackgroundColorFromLocalStorage() {
    // Prüfe, ob eine Hintergrundfarbe im Local Storage gespeichert ist
    const savedColor = localStorage.getItem('backgroundColor');

    // Wenn eine Farbe gefunden wurde, wende sie auf den Seitenhintergrund an
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
}

// Hintergrundfarbe anwenden, sobald die Seite geladen ist
window.addEventListener('DOMContentLoaded', () => {
    applyBackgroundColorFromLocalStorage();
});

// Liste der Bilddateien für die Thumbnails
const images = [
    "pix/Resize_20241108_181342_2357.jpg",
"pix/Resize_20241108_181342_2907.jpg",
"pix/Resize_20241108_181343_3317.jpg",
"pix/Resize_20241108_181344_4120.jpg",
"pix/Resize_20241108_181344_4719.jpg",
"pix/Resize_20241108_181345_5167.jpg",
"pix/Resize_20241108_181347_7213.jpg",
"pix/Resize_20241108_181348_8159.jpg",
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
"pix/Resize_20241108_181358_8527.jpg",
"pix/Resize_20241108_181359_9001.jpg",
"pix/Resize_20241108_181359_9184.jpg",
"pix/Resize_20241108_181359_9383.jpg",
"pix/Resize_20241108_181359_9547.jpg",
"pix/Resize_20241108_181359_9771.jpg"
];

// Funktion zum Laden der Thumbnails und zur Bildanzeige
function loadThumbnails() {
    const container = document.getElementById('thumbnail-container');
    const displayImage = document.getElementById('display-image');
    
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('thumbnail');
        
        // Klick-Event, um das gewählte Bild in der Anzeige zu zeigen
        img.addEventListener('click', () => {
            displayImage.src = src;
            
            // Entfernt die 'selected'-Klasse von allen anderen Thumbnails
            document.querySelectorAll('.thumbnail').forEach(thumbnail => {
                thumbnail.classList.remove('selected');
            });
            
            // Fügt der aktuellen Auswahl die 'selected'-Klasse hinzu
            img.classList.add('selected');
        });
        
        container.appendChild(img);
    });
}

// Initialisiere die Seite beim Laden
window.addEventListener('DOMContentLoaded', loadThumbnails);
