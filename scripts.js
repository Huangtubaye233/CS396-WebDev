document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.getElementById('settings-btn');
    const fontSelector = document.getElementById('font-selector');
    const themeSelector = document.getElementById('theme-selector');

    settingsButton.addEventListener('click', function() {
        toggleDropdowns();
    });

    settingsButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();  
            toggleDropdowns();
        }
    });

    function toggleDropdowns() {
        const isFontOpen = fontSelector.style.display === 'block';
        fontSelector.style.display = isFontOpen ? 'none' : 'block';
        themeSelector.style.display = isFontOpen ? 'none' : 'block';
        settingsButton.setAttribute('aria-expanded', !isFontOpen);
        fontSelector.setAttribute('aria-hidden', isFontOpen);
        themeSelector.setAttribute('aria-hidden', isFontOpen);
    }

    fontSelector.addEventListener('change', function() {
        document.body.style.fontFamily = this.value;
        closeBothSelectors();
    });

    themeSelector.addEventListener('change', function() {
        document.body.className = this.value;
        closeBothSelectors();
    });

    function closeBothSelectors() {
        fontSelector.style.display = 'none';
        themeSelector.style.display = 'none';
        settingsButton.setAttribute('aria-expanded', 'false');
        fontSelector.setAttribute('aria-hidden', 'true');
        themeSelector.setAttribute('aria-hidden', 'true');
    }

    document.body.addEventListener('click', function(e) {
        if (!e.target.closest('.settings-container')) {
            closeBothSelectors();
        }
    }, true);
});

document.addEventListener('DOMContentLoaded', function() {
    anime({
        targets: '.avatar',
        scale: [0.1, 1], // Start from scale 0.1 to 1
        opacity: [0, 1], // Fade in from 0 to full opacity
        duration: 800,
        easing: 'easeOutExpo'
    });
});
