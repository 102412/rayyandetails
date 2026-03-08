// Initialize Animations
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Initialize Icons
lucide.createIcons();

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive "Glow" Button logic
const glowBtn = document.getElementById('glow-trigger');
glowBtn.addEventListener('click', () => {
    glowBtn.classList.toggle('glow-active');
    
    if(glowBtn.classList.contains('glow-active')) {
        glowBtn.innerText = "SYSTEMS OPTIMIZED";
        document.body.style.textShadow = "0 0 10px rgba(0, 242, 255, 0.5)";
    } else {
        glowBtn.innerText = "Click for the Rayyan Glow";
        document.body.style.textShadow = "none";
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 5%';
    } else {
        nav.style.padding = '2rem 5%';
    }
});
