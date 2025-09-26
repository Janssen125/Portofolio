  document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();

      const status = document.getElementById("status");
      status.textContent = "Sending...";

      emailjs.sendForm("service_vlwyo8m", "template_vrc2wjt", this)
          .then(() => {
              status.textContent = "Thank you for reaching out! I’ll get back to you as soon as I’m available.";
              this.reset();
          })
          .catch((error) => {
              console.error("EmailJS Error:", error);
              status.textContent = "Failed to send message. Please try again.";
          });
  });