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



function toggleReflection(card) {
    const allCards = document.querySelectorAll('.reflection-card');

    // Close any other open cards
    allCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
        }
    });

    // Toggle the clicked one
    card.classList.toggle('expanded');
}


// Handle Formspree success message without reloading the page
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("success-message");
  
    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent page reload
  
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
  
        if (response.ok) {
          form.reset(); // Clear the form
          successMessage.classList.remove("hidden-section"); // Show success
        } else {
          alert("There was a problem submitting your message. Please try again.");
        }
      });
    }
  });
  