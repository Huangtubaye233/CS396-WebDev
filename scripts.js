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
        scale: [0.25, 1], 
        opacity: [0, 1], 
        duration: 2000,
        easing: 'easeOutExpo'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('event1-button').addEventListener('click', function() {
        showEventDetails('Details about Event 1...');
    });

    document.getElementById('event2-button').addEventListener('click', function() {
        showEventDetails('Details about Event 2...');
    });
});

function showEventDetails(detailsText) {
    const eventDetails = document.getElementById('event-details');
    document.getElementById('event-text').textContent = detailsText;
    eventDetails.style.display = 'block';
    eventDetails.style.opacity = 0;
    eventDetails.style.transform = 'translate(-50%, -50%) scale(0.9)'; 
    
    anime({
        targets: eventDetails,
        opacity: 1,
        scale: [0.75, 1], 
        translateY: ['-50%', '-50%'],
        easing: 'easeOutExpo',
        duration: 500
    });
}

function closeEventDetails() {
    const eventDetails = document.getElementById('event-details');
    anime({
        targets: eventDetails,
        opacity: 0,
        scale: [1, 0.75],
        translateY: ['-50%', '-50%'], 
        easing: 'easeInExpo',
        duration: 500,
        complete: function() {
            eventDetails.style.display = 'none'; 
        }
    });
}
