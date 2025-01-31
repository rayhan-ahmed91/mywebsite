document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully.");

    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Adding Scroll Animation Effect
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
        section.classList.add("fade-out");
    });
});
