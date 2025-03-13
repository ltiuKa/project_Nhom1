// Menu cố định khi cuộn và thay đổi màu nền
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to right, #1e3a8a, #3b82f6)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #4facfe, #00f2fe)';
    }
});

// Hiệu ứng fade-in khi cuộn
const fadeInElements = document.querySelectorAll('.fade-in');

const checkFadeIn = () => {
    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// Hiệu ứng hover cho danh sách kỹ năng
const skillsList = document.querySelectorAll('#skills-list li');
skillsList.forEach(skill => {
    skill.addEventListener('mouseover', function() {
        this.style.color = '#4facfe';
        this.style.paddingLeft = '10px';
    });
    skill.addEventListener('mouseout', function() {
        this.style.color = '#555';
        this.style.paddingLeft = '0';
    });
});

// Smooth scroll khi nhấp vào menu
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});