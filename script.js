document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully.");

    // Smooth Scroll for Navigation
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
