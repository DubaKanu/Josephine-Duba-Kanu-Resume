// Smooth scrolling for navigation links
document.querySelectorAll('#main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation items on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('#main-nav a').forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').slice(1) === current) {
            li.classList.add('active');
        }
    });
});

// Simple form validation for contact form (if you decide to add one)
const form = document.querySelector('#contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form validation logic here
        console.log('Form submitted');
    });
}

// Add animation to skills section
const skillsSection = document.querySelector('#skills');
const skills = document.querySelectorAll('#skills li');

const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.opacity = 1;
                    skill.style.transform = 'translateY(0)';
                }, index * 100);
            });
            observer.unobserve(entry.target);
        }
    });
};

const skillsObserver = new IntersectionObserver(animateSkills, {
    root: null,
    threshold: 0.5
});

skillsObserver.observe(skillsSection);

// LinkedIn profile link
document.getElementById('linkedin-link').addEventListener('click', (e) => {
    e.preventDefault();
    // Replace with your actual LinkedIn profile URL
    window.open('https://www.linkedin.com/in/your-profile', '_blank');
});