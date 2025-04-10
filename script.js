function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Collapse other details when one is opened
document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', function () {
        if (this.open) {
            document.querySelectorAll('details').forEach((other) => {
                if (other !== this) other.removeAttribute('open');
            });
        }
    });
});

function toggleBox(element) {
    const next = element.nextElementSibling;
    if (next.classList.contains('hidden-section')) {
        next.classList.remove('hidden-section');
    } else {
        next.classList.add('hidden-section');
    }
}



// Load user's preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

