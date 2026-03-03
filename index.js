/*** Window onload — initialize everything ***/
window.onload = function () {
  generateShapes();

  generateProjectTiles();
  generatePaperTiles();
  generateEducationTiles();
  generateExperienceTiles();
  generateArticleTiles();
  generateContactTiles();
};


/*** Section fade-in with IntersectionObserver ***/
const observerOptions = {
  threshold: 0.05,
  rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  sectionObserver.observe(section);
});


/*** Dark Mode toggling ***/
const darkModeToggle = document.querySelector("#dark-mode-toggle");
var isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply saved preference on load
if (isDarkMode) {
  document.body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
  localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
});
