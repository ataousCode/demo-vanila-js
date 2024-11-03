document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Here you would typically send the data to your server
      console.log("Form submitted:", { email, password });

      // Simulate loading state
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = "Processing...";

      // Simulate API call
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        alert("Form submitted successfully!");
      }, 2000);
    });
  }

  // Add click event listeners for social login buttons
  const googleButton = document.querySelector(".btn-google");
  const githubButton = document.querySelector(".btn-github");

  if (googleButton) {
    googleButton.addEventListener("click", () => {
      alert("Google login clicked");
      // Implement Google OAuth here
    });
  }

  if (githubButton) {
    githubButton.addEventListener("click", () => {
      alert("GitHub login clicked");
      // Implement GitHub OAuth here
    });
  }
});
