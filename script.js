// script.js

// Alle Toggle-Buttons und Untermenüs abrufen
const toggleButtons = document.querySelectorAll('.toggle-button');
const submenus = document.querySelectorAll('.submenu');

// Event Listener für alle Toggle-Buttons
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetMenu = document.getElementById(targetId);

        // Alle Untermenüs und Dreiecke zurücksetzen
        submenus.forEach(menu => {
            if (menu !== targetMenu) {
                menu.classList.remove('active');
            }
        });
        toggleButtons.forEach(btn => {
            if (btn !== button) {
                btn.querySelector('.triangle').classList.remove('open');
            }
        });

        // Das ausgewählte Untermenü ein- oder ausblenden
        targetMenu.classList.toggle('active');
        button.querySelector('.triangle').classList.toggle('open');
    });
});

// Schließt alle Menüs bei Klick außerhalb
document.addEventListener('click', (event) => {
    if (!event.target.closest('#link-container')) {
        submenus.forEach(menu => menu.classList.remove('active'));
        toggleButtons.forEach(button => button.querySelector('.triangle').classList.remove('open'));
    }
});
    
