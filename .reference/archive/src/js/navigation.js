/**
 * Navigation Logic
 * Mobile menu toggle and smooth scrolling
 */

const initNavigation = () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('nav-menu--open');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('nav-menu--open') &&
            !navMenu.contains(e.target) &&
            !mobileToggle.contains(e.target)) {
            navMenu.classList.remove('nav-menu--open');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    });
};

document.addEventListener('DOMContentLoaded', initNavigation);
