// === 1. DARK MODE TOGGLE ===
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark-mode'); // Apply to <html>
  localStorage.setItem('darkMode', document.documentElement.classList.contains('dark-mode'));
}

// Load user's dark mode preference early
if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.classList.add('dark-mode');
}

// === 2. COLLAPSIBLE DETAILS HANDLER ===
document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', function () {
      if (this.open) {
          document.querySelectorAll('details').forEach((other) => {
              if (other !== this) other.removeAttribute('open');
          });
      }
  });
});

// === 3. TOGGLE COLLAPSIBLE BOX SECTIONS (Coursework, Reflections) ===
function toggleBox(element) {
  const next = element.nextElementSibling;
  next.classList.toggle('hidden-section');
}

// === 4. REFLECTION CARD EXPANSION ===
function toggleReflection(card) {
  const allCards = document.querySelectorAll('.reflection-card');

  // Collapse all others
  allCards.forEach(c => {
      if (c !== card) c.classList.remove('expanded');
  });

  // Toggle selected card
  card.classList.toggle('expanded');
}

// === 5. FORM HANDLING WITH LOADING, SUCCESS, ERROR ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");
  const loadingSpinner = document.getElementById("loading-spinner");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
      e.preventDefault(); // Prevent page reload

      // Reset UI
      successMessage?.classList.add("hidden-section");
      errorMessage?.classList.add("hidden-section");
      loadingSpinner?.classList.remove("hidden-section");

      const formData = new FormData(form);

      try {
          const response = await fetch(form.action, {
              method: "POST",
              body: formData,
              headers: { "Accept": "application/json" }
          });

          loadingSpinner?.classList.add("hidden-section");

          if (response.ok) {
              form.reset();
              successMessage?.classList.remove("hidden-section");
          } else {
              errorMessage?.classList.remove("hidden-section");
          }
      } catch (error) {
          loadingSpinner?.classList.add("hidden-section");
          errorMessage?.classList.remove("hidden-section");
      }
  });
});
