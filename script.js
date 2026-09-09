const root = document.body;
const themeToggle = document.querySelector('#theme-toggle');
const printButton = document.querySelector('#print-page');
const copyButton = document.querySelector('#copy-domain');

const storedTheme = localStorage.getItem('samasara-theme');
if (storedTheme === 'dark') root.classList.add('dark');

themeToggle.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('samasara-theme', root.classList.contains('dark') ? 'dark' : 'light');
});

printButton.addEventListener('click', () => window.print());

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('https://samasara.site');
    copyButton.querySelector('span').textContent = '已复制 samasara.site';
    setTimeout(() => { copyButton.querySelector('span').textContent = '复制 samasara.site'; }, 1800);
  } catch {
    window.open('https://samasara.site', '_blank', 'noopener');
  }
});

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
