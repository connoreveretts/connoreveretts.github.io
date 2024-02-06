document.querySelectorAll('.job-header').forEach(header => {
    header.addEventListener('click', () => {
        // This will find the next sibling element with the class 'job-description' and toggle its display
        const description = header.nextElementSibling;
        description.style.display = description.style.display === 'block' ? 'none' : 'block';
    });
});
