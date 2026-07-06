document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navigation Logic
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle?.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    // 2. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. Animated Counters
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const startCounter = (entry) => {
        const target = +entry.target.getAttribute('data-target');
        const count = +entry.target.innerText;
        const increment = target / speed;

        if (count < target) {
            entry.target.innerText = Math.ceil(count + increment);
            setTimeout(() => startCounter(entry), 1);
        } else {
            entry.target.innerText = target + '+';
        }
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 1.0 });

    counters.forEach(c => counterObserver.observe(c));

    // 4. Form Handling simulation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-submit');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your inquiry. A Velora representative will contact you shortly.');
                btn.innerText = originalText;
                btn.disabled = false;
                form.reset();
            }, 2000);
        });
    });

    // 5. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });
});
