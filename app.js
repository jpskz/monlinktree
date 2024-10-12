// Sélectionne le bouton
const toggleThemeButton = document.getElementById('theme-toggle');

// Écouteur d'événements pour le clic sur le bouton
toggleThemeButton.addEventListener('click', () => {
    // Bascule la classe 'dark-theme' sur le body
    document.body.classList.toggle('dark-theme');

    // Vérifie si le mode sombre est activé
    const isDarkTheme = document.body.classList.contains('dark-theme');

    // Change le texte du bouton en fonction du thème
    toggleThemeButton.innerText = isDarkTheme ? '🌞 Changer en mode clair' : '🌙 Changer en mode sombre';

    // Sauvegarde le thème choisi dans le stockage local
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// Charge le thème au démarrage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleThemeButton.innerText = '🌞 Changer en mode clair'; // Met à jour le texte du bouton
}


// Fonction pour mettre à jour l'heure en temps réel
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format de l'heure HH:MM:SS
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    // Affiche l'heure dans l'élément avec l'ID 'real-time-clock'
    document.getElementById('real-time-clock').textContent = currentTime;
}

// Met à jour l'horloge toutes les secondes
setInterval(updateClock, 1000);

// Appel initial pour définir l'heure dès le chargement de la page
updateClock();

