document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Contact Form Submission Logic
    const contactForm = document.getElementById('portfolio-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Capture Form Elements
            const name = document.getElementById('user-name').value;
            const email = document.getElementById('user-email').value;
            const subject = document.getElementById('user-subject').value;
            const message = document.getElementById('user-message').value;
            
            // Logic validation placeholder
            if (name && email && message) {
                alert(`Awesome, ${name}! Your inquiry about "${subject}" has been noted. I'll get back to you at ${email}.`);
                contactForm.reset();
            }
        });
    }
});