document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navLinks.classList.remove('active');
        }
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    document.documentElement.style.scrollBehavior = 'smooth';

    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Thank you for your interest! Our ordering system will be available soon. 🎂');
    });

    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            product.style.transform = 'translateY(-10px)';
        });
        
        product.addEventListener('mouseleave', () => {
            product.style.transform = 'translateY(0)';
        });
    });
}); 