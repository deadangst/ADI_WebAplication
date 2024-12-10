document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".report-buttons button");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // Cierra todos los dropdowns abiertos
            const dropdowns = document.querySelectorAll(".report-links");
            dropdowns.forEach((dropdown) => {
                if (dropdown !== this.nextElementSibling) {
                    dropdown.style.display = "none";
                }
            });

            // Alterna la visibilidad del dropdown asociado al botón clicado
            const associatedDropdown = this.nextElementSibling;
            if (associatedDropdown) {
                if (associatedDropdown.style.display === "block") {
                    associatedDropdown.style.display = "none";
                } else {
                    associatedDropdown.style.display = "block";
                }
            }
        });
    });
});
