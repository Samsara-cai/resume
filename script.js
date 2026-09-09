const root = document.body;
const themeToggle = document.querySelector('#theme-toggle');
const printButton = document.querySelector('#print-page');

const storedTheme = localStorage.getItem('samasara-theme');
if (storedTheme === 'dark') root.classList.add('dark');

themeToggle.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('samasara-theme', root.classList.contains('dark') ? 'dark' : 'light');
});

printButton.addEventListener('click', () => window.print());

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
