function updateLightboxVisibility() {
  const hash = window.location.hash;
  document.querySelectorAll('.lightbox').forEach(function(lightbox) {
    const isActive = '#' + lightbox.id === hash;

    if (isActive) {
      lightbox.classList.add('visible');
      lightbox.style.display = 'flex';
    } else {
      if (lightbox.classList.contains('visible')) {
        lightbox.classList.remove('visible');
        setTimeout(() => {
          lightbox.style.display = 'none';
        }, 500);
      } else {
        lightbox.style.display = 'none';
      }
    }
  });
}

window.addEventListener('hashchange', updateLightboxVisibility);
window.addEventListener('load', updateLightboxVisibility);

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    if (window.location.hash.startsWith("#img")) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
      updateLightboxVisibility();
    }
  }
});

document.addEventListener("keydown", function(event) {
  const currentHash = window.location.hash;

  if (!currentHash.startsWith("#img")) return;

  const currentId = parseInt(currentHash.replace("#img", ""));
  let nextId;

  if (event.key === "ArrowRight") {
    nextId = currentId === 6 ? 1 : currentId + 1;
    window.location.hash = "#img" + nextId;
  }

  if (event.key === "ArrowLeft") {
    nextId = currentId === 1 ? 6 : currentId - 1;
    window.location.hash = "#img" + nextId;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  // ✅ Check localStorage w dir dark mode ila khznah
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      // ✅ Update localStorage
      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
      }
    });
  }
});


window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});
