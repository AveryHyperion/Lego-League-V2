document.addEventListener("scroll", () => {
    const navBar = document.querySelector(".nav-bar");
    if (window.scrollY > 50) {
      navBar.style.background = "transparent"; // Make transparent when scrolling
    } else {
      navBar.style.background = "#ff9a9e"; // Restore initial color
    }
  });
  