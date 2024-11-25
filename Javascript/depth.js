document.addEventListener("scroll", () => {
    const maxDepth = 10000; // Approximate maximum depth in meters (Challenger Deep)
    const depthIndicator = document.querySelector(".depth-indicator");
    const depthBar = document.querySelector(".depth-bar");
    const footer = document.querySelector(".footer");

    const scrollPos = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const depth = Math.min(Math.floor((scrollPos / docHeight) * maxDepth), maxDepth);

    // Update the depth text
    depthIndicator.textContent = `Depth: ${depth}m`;

    // Get the position of the footer
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    const windowBottom = scrollPos + window.innerHeight;

    // Check if the depth bar should stop before the footer
    if (windowBottom >= footerTop) {
        depthBar.style.position = "absolute";
        depthBar.style.bottom = `${window.innerHeight - footerTop}px`;
    } else {
        depthBar.style.position = "fixed";
        depthBar.style.bottom = "1.5rem";
    }
});
