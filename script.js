document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (this.disabled) return;

      this.classList.toggle("active");
      const panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";

        // Desbloquear el siguiente semestre automáticamente (si existe)
        const next = accordions[index + 1];
        if (next) {
          next.disabled = false;
        }
      }
    });
  });
});
