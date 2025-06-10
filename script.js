/* Updated script.js */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully.");

    // Smooth Scroll for Navigation
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });

            // Close mobile menu after click
            document.querySelector("nav").classList.remove("active");
        });
    });

    // Toggle Mobile Navigation Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Accordion for collapsible publication sections
    document.querySelectorAll(".collapsible").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});
