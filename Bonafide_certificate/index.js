document.addEventListener("DOMContentLoaded", function() {
    const getCertificateButton = document.getElementById("getCertificateButton");
  
    // Check if the user is logged in (replace this condition with your actual check)
    const userIsLoggedIn = true; // Change this to your actual check
  
    if (userIsLoggedIn) {
      getCertificateButton.href = "form.html";
    } else {
      getCertificateButton.href = "login.html";
    }
  });
  