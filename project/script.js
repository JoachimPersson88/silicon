// Hitta knappen
const toggleButton = document.getElementById('darkModeToggle');

// När man klickar på knappen togglar vi klassen på <body>
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
});
