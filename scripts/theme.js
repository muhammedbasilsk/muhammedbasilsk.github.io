/**
 * Theme Toggle Logic
 * Handles system preference and user manual toggle.
 */

const ThemeManager = {
    init() {
        this.toggleBtn = document.getElementById('theme-toggle');
        this.sunIcon = this.toggleBtn.querySelector('.sun-icon');
        this.moonIcon = this.toggleBtn.querySelector('.moon-icon');
        
        // Check local storage or system preference
        const storedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        this.currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
        
        this.applyTheme(this.currentTheme);
        this.bindEvents();
    },

    bindEvents() {
        this.toggleBtn.addEventListener('click', () => {
            this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.applyTheme(this.currentTheme);
            localStorage.setItem('theme', this.currentTheme);
        });

        // Listen for system theme changes if no local storage preference is set
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.currentTheme = e.matches ? 'dark' : 'light';
                this.applyTheme(this.currentTheme);
            }
        });
    },

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update Icons visually
        if (theme === 'dark') {
            this.sunIcon.style.display = 'block';
            this.moonIcon.style.display = 'none';
        } else {
            this.sunIcon.style.display = 'none';
            this.moonIcon.style.display = 'block';
        }
    }
};

// Initialize as soon as DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
});
