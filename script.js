document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const welcomeSection = document.getElementById('welcome');
    const welcomeHeight = welcomeSection.offsetHeight;

    // Navbar scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > welcomeHeight - 50) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }
    });

    // Fade-in on scroll
    const contentElements = document.querySelectorAll('section, footer, .container, .row, .col');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1
    });

    contentElements.forEach((el) => {
        el.classList.add('fade-in'); 
        observer.observe(el);
    });
});