// Hitta knappen
const toggleButton = document.getElementById('darkModeToggle');

// När man klickar på knappen togglar vi klassen på <body>
toggleButton.addEventListener('click', () => {
  // Toggla dark mode-klassen på body
  document.body.classList.toggle('darkMode');
  // Toggla "is-on"-klassen på själva knappen för animation
  toggleButton.classList.toggle('is-on');   
});
