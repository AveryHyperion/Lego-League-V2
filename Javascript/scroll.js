document.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const sections = document.querySelectorAll(".section");
  const scrollPos = window.scrollY;
  const starsContainer = document.querySelector(".stars-container");

  // Fade out the hero section as you scroll down
  if (scrollPos > 50) {
    hero.style.opacity = Math.max(1 - scrollPos / 300, 0);
  } else {
    hero.style.opacity = 1;
  }

  // Reveal sections as you scroll to them
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPos + windowHeight >= sectionTop + sectionHeight / 3) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });

  // Update stars as you scroll deeper
  const depth = Math.min(scrollPos / 1000, 1); // Scale depth from 0 to 1
  const numberOfStars = Math.floor(100 + depth * 200); // Adjust star density
  starsContainer.innerHTML = ""; // Clear existing stars

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    const size = Math.random() * 2 + 1; // Random size between 1 and 3px
    const xPos = Math.random() * 100; // Random horizontal position (0% to 100%)
    const yPos = Math.random() * 100; // Random vertical position (0% to 100%)

    star.classList.add("star");
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${xPos}%`;
    star.style.top = `${yPos}%`;
    star.style.animationDelay = `${Math.random() * 3}s`; // Randomize flicker timing

    starsContainer.appendChild(star);
  }
});
