document.addEventListener("DOMContentLoaded", () => {
  // Theme switcher
  const switchTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  // Add event listeners to theme switcher buttons
  document.querySelector(".theme-switcher").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      switchTheme(e.target.textContent.split(' ')[0].toLowerCase());
    }
  });

  // Set alt text as caption for images
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    const img = item.querySelector("img");
    const caption = item.querySelector(".caption");
    caption.textContent = img.alt;
  });
});



// Theme switcher
function switchTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  switchTheme(savedTheme);
});

// Image effects
document.querySelectorAll('.grid-item img').forEach((img) => {
  img.addEventListener('click', () => {
    img.classList.toggle('enlarge');
  });

  img.addEventListener('mouseover', () => {
    const caption = img.getAttribute('alt');
    const captionDiv = document.createElement('div');
    captionDiv.className = 'caption';
    captionDiv.innerText = caption;
    img.parentElement.appendChild(captionDiv);
  });

  img.addEventListener('mouseout', () => {
    const captionDiv = img.parentElement.querySelector('.caption');
    if (captionDiv) {
      captionDiv.remove();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-button, .create-new-product-button, .start-now-button').forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
});
