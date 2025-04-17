document.addEventListener("DOMContentLoaded", () => {
    const skillFills = document.querySelectorAll(".skill-fill");

    function animateSkillBars() {
        skillFills.forEach((bar) => {
            const width = bar.classList.contains("html")
                ? "75%"
                : bar.classList.contains("css")
                ? "80%"
                : bar.classList.contains("js")
                ? "80%"
                : bar.classList.contains("react")
                ? "65%"
                : "0%";

            bar.style.width = width; // Apply width dynamically
        });
    }

    // Trigger animation on scroll
    function checkScroll() {
        let skillsSection = document.getElementById("skills");
        let position = skillsSection.getBoundingClientRect().top;
        let screenHeight = window.innerHeight / 1.3;

        if (position < screenHeight) {
            animateSkillBars();
            window.removeEventListener("scroll", checkScroll); // Stop after first animation
        }
    }

    window.addEventListener("scroll", checkScroll);
});




function toggleMenu() {
    const navLinks = document.querySelector(".navbar ul");
    navLinks.classList.toggle("active");
}
