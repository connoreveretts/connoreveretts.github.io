document.querySelectorAll('.job-header').forEach(header => {
    header.addEventListener('click', () => {
        const description = header.nextElementSibling;
        description.style.display = description.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.project-header').forEach(header => {
    header.addEventListener('click', () => {
        const description = header.nextElementSibling;
        description.style.display = description.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('dynamicTyping');
    const textToType = textElement.innerText;
    textElement.innerText = ''; 

    let index = 0;
    function typeLetter() {
        if (index < textToType.length) {
            textElement.innerText += textToType.charAt(index);
            index++;
            setTimeout(typeLetter, 25);
        }
    }

    typeLetter(); 
});


document.addEventListener('DOMContentLoaded', function() {
    // Existing dynamic typing effect for 'About Myself' section
    const textElement = document.getElementById('dynamicTyping');
    const textToType = textElement.innerText;
    textElement.innerText = ''; 

    let index = 0;
    function typeLetter() {
        if (index < textToType.length) {
            textElement.innerText += textToType.charAt(index);
            index++;
            setTimeout(typeLetter, 25);
        }
    }

    typeLetter();

    // Job and Project header toggle functionality
    document.querySelectorAll('.job-header, .project-header').forEach(header => {
        header.addEventListener('click', () => {
            const description = header.nextElementSibling;
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for the 'About Myself' section
    const textElement = document.getElementById('dynamicTyping');
    const textToType = textElement.innerText;
    textElement.innerText = ''; 

    let index = 0;
    function typeLetter() {
        if (index < textToType.length) {
            textElement.innerText += textToType.charAt(index);
            index++;
            setTimeout(typeLetter, 100); // Adjust typing speed if necessary
        }
    }

    typeLetter();

    // Toggle functionality for job and project descriptions
    document.querySelectorAll('.job-header, .project-header').forEach(header => {
        header.addEventListener('click', function() {
            const description = this.nextElementSibling;
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Scroll to Top Button functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});



