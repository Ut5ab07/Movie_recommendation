document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check localStorage, default to 'dark' if not set
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('light-mode');
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '🌙';
        }
    });
});
