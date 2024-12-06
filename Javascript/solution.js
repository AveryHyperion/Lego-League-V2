// Function to handle scroll animations
function handleScroll() {
    const solutionBars = document.querySelectorAll('.solution-bar');
    const scrollPosition = window.scrollY + window.innerHeight;
  
    solutionBars.forEach(bar => {
      const barPosition = bar.offsetTop + bar.offsetHeight / 2;
      if (scrollPosition > barPosition) {
        bar.classList.add('appear');
      } else {
        bar.classList.remove('appear');
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll); // Trigger on load to reveal elements on page refresh
  