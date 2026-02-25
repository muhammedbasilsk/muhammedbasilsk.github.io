/**
 * Main Interactions & Animations
 */

const App = {
    init() {
        this.initScrollAnimations();
        this.initSmoothScroll();
    },

    initScrollAnimations() {
        // Intersection Observer for scroll animations (fade in / slide up)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% visible
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Unobserve after animating once for performance
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Select all elements with animation classes
        const animatedElements = document.querySelectorAll('.slide-up, .opacity-0');

        animatedElements.forEach(el => {
            observer.observe(el);
        });

        // Immediately trigger hero section if visible
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            setTimeout(() => {
                heroSection.classList.add('is-visible');
            }, 100);
        }
    },

    initSmoothScroll() {
        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Return if it's just "#"
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    // Header offset
                    const headerOffset = 64;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
