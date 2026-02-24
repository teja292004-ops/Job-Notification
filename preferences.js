document.getElementById('preferencesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const preferences = {
        locations: document.getElementById('locations').value,
        minScore: parseInt(document.getElementById('minScore').value)
    };
    
    localStorage.setItem('jobTrackerPreferences', JSON.stringify(preferences));
    
    const message = document.getElementById('message');
    message.textContent = 'Preferences saved successfully!';
    message.className = 'message success';
    
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
});

// Load existing preferences
window.addEventListener('DOMContentLoaded', function() {
    const saved = localStorage.getItem('jobTrackerPreferences');
    if (saved) {
        const preferences = JSON.parse(saved);
        document.getElementById('locations').value = preferences.locations || '';
        document.getElementById('minScore').value = preferences.minScore || 70;
    }
});
