// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('show', window.scrollY > 300);
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Skills Bar Animation using IntersectionObserver
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');

if (skillsSection) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-skill');
                    bar.style.width = width;
                });
                observer.unobserve(skillsSection); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(skillsSection);
}

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Typing effect in hero section
const textToType = "I'm Glory Paul";
let index = 0;
const typingElement = document.querySelector('.hero-text h1 span');

function typeText() {
    if (index < textToType.length) {
        typingElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here
    }
}

if (typingElement) {
    window.onload = typeText;
}

// Moving "AVAILABLE FOR WORK" section
const availableSection = document.querySelector('.available');

function moveAvailableForWork() {
    if (!availableSection) return;

    const scrollY = window.scrollY;
    const bottomOfPage = scrollY + window.innerHeight >= document.body.scrollHeight;

    if (bottomOfPage) {
        availableSection.style.position = 'fixed';
        availableSection.style.bottom = '0';
        availableSection.style.left = '50%';
        availableSection.style.transform = 'translateX(-50%)';
        availableSection.style.backgroundColor = '#2980b9';
        availableSection.style.color = 'white';
        availableSection.style.padding = '10px';
        availableSection.style.width = '100%';
        availableSection.style.textAlign = 'center';
    } else {
        availableSection.style.position = 'static';
    }
}

window.addEventListener('scroll', moveAvailableForWork);

// Dark mode toggle
const themeToggleBtn = document.querySelector('.theme-toggle-btn');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Optionally toggle the button text or icon here
    });
}









