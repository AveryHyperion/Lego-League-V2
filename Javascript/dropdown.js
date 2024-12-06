document.addEventListener('DOMContentLoaded', function () {
    const dropdownHeaders = document.querySelectorAll('.diary-title');
    dropdownHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            if (content.style.display === 'block') {
                content.style.display = 'none';
                content.style.height = '0'; // Collapse height
                content.style.opacity = '0'; // Fade out
                arrow.textContent = '►'; // Right arrow
                this.classList.remove('active'); // Remove active class
            } else {
                content.style.display = 'block';
                content.style.height = 'auto'; // Auto height
                content.style.opacity = '1'; // Fade in
                arrow.textContent = '▼'; // Down arrow
                this.classList.add('active'); // Add active class to trigger transition
            }
        });
    });
});
