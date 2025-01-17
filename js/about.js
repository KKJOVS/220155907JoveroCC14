// Animating my profile section
const profileImage = document.querySelector('.profile-image');
const aboutText = document.querySelector('.about-text');
const certItems = document.querySelectorAll('.cert-item');

// This is for visibility
profileImage.style.opacity = 0;
profileImage.style.transform = 'translateX(-20px)';
aboutText.style.opacity = 0;
aboutText.style.transform = 'translateX(20px)';

certItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
});

// Animation observer
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translate(0)';
            entry.target.style.transition = 'all 0.5s ease-out';
        }
    });
}, observerOptions);

// Observe elements
observer.observe(profileImage);
observer.observe(aboutText);
certItems.forEach(item => observer.observe(item));

// Animation for my cards in hobby
const hobbyCards = document.querySelectorAll('.hobby-card');

hobbyCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
}); 