// Scroll reveal animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// FAQ accordion functionality
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.querySelector('.faq-answer');
        const icon = this.querySelector('i');
        
        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer) {
                otherAnswer.classList.add('hidden');
                otherAnswer.parentElement.querySelector('i').classList.remove('fa-minus');
                otherAnswer.parentElement.querySelector('i').classList.add('fa-plus');
            }
        });

        // Toggle current answer
        answer.classList.toggle('hidden');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add reveal class to all sections on load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal');
    });
    reveal(); // Initial check for visible elements
});