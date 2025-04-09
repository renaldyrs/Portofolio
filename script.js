
// Loading Animation
window.addEventListener('load', function () {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 800);

    // Animate loading text
    const loadingText = document.querySelector('.loading-text');
    let dots = 0;
    const dotInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        loadingText.textContent = 'Loading' + '.'.repeat(dots);
    }, 500);

    setTimeout(() => {
        clearInterval(dotInterval);
    }, 800);
});

// Sticky Header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
document.querySelector('.back-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate Elements on Scroll
const animateOnScroll = function () {
    const elements = document.querySelectorAll('.hero-content h1, .hero-content h3, .hero-content p, .hero-content .btn-box, .hero-img, .about-img, .about-text h3, .about-text p, .skill-items, .project-card, .contact-info, .contact-form');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translate(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on page load

// 3D Hover Effect for About Image
const aboutImgContainer = document.querySelector('.about-img-container');

if (aboutImgContainer) {
    aboutImgContainer.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        aboutImgContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    aboutImgContainer.addEventListener('mouseenter', () => {
        aboutImgContainer.style.transition = 'none';
    });

    aboutImgContainer.addEventListener('mouseleave', () => {
        aboutImgContainer.style.transition = 'all 0.5s ease';
        aboutImgContainer.style.transform = 'rotateY(10deg) rotateX(0)';
    });
}

// Form Submission
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, subject, message });

        // Show success message with animation
        const submitBtn = this.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.backgroundColor = '#4BB543';

        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            submitBtn.style.backgroundColor = '';
        }, 3000);
    });
}

// Particle Animation
const particles = document.querySelectorAll('.particles li');
particles.forEach(particle => {
    // Randomize initial position
    particle.style.left = `${Math.random() * 100}%`;

    // Randomize animation duration and delay
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
});

// Text effect for hero heading
const heroHeading = document.querySelector('.hero-content h1 span');
if (heroHeading) {
    heroHeading.addEventListener('mouseover', () => {
        heroHeading.style.transform = 'scale(1.05)';
        heroHeading.style.color = '#fff';
    });

    heroHeading.addEventListener('mouseout', () => {
        heroHeading.style.transform = 'scale(1)';
        heroHeading.style.color = 'var(--accent)';
    });
}