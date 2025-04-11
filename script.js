function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// 🔄 Fancy AJAX Form Submission with Loading, Success, and Error Handling
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");
    const loadingSpinner = document.getElementById("loading-spinner");
  
    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault(); // ⛔ Prevent normal form submission
  
        // Reset all messages
        successMessage.classList.add("hidden-section");
        errorMessage.classList.add("hidden-section");
  
        // Show spinner
        loadingSpinner.classList.remove("hidden-section");
  
        const formData = new FormData(form);
  
        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
          });
  
          loadingSpinner.classList.add("hidden-section"); // Hide spinner
  
          if (response.ok) {
            form.reset(); // Clear form inputs
            successMessage.classList.remove("hidden-section"); // ✅ Show success
          } else {
            errorMessage.classList.remove("hidden-section"); // ❌ Show error
          }
        } catch (err) {
          loadingSpinner.classList.add("hidden-section");
          errorMessage.classList.remove("hidden-section");
        }
      });
    }
  });
  

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
  


  // Wait until the page fully loads
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");
    const loadingSpinner = document.getElementById("loading-spinner");
  
    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault(); // Stop the page from reloading
  
        // Hide previous messages
        successMessage.classList.add("hidden-section");
        errorMessage.classList.add("hidden-section");
  
        // Show loading spinner
        loadingSpinner.classList.remove("hidden-section");
  
        const formData = new FormData(form);
  
        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
          });
  
          // Hide loading spinner
          loadingSpinner.classList.add("hidden-section");
  
          if (response.ok) {
            form.reset(); // Clear form fields
            successMessage.classList.remove("hidden-section"); // Show thank you
          } else {
            errorMessage.classList.remove("hidden-section"); // Show error message
          }
        } catch (error) {
          loadingSpinner.classList.add("hidden-section");
          errorMessage.classList.remove("hidden-section"); // Show error on fail
        }
      });
    }
  });
  