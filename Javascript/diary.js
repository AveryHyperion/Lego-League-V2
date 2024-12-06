document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".diary-section");

    const revealSections = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition > sectionTop + 100 && scrollPosition - windowHeight < sectionTop + sectionHeight) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible"); 
            }
        });
    };

    // Attach Scroll Event
    window.addEventListener("scroll", revealSections);

    // Initial Check
    revealSections();
});
