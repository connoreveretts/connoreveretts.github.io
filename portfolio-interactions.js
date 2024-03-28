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


const supabase = supabase.createClient('https://zaidhkzizjuhenuztxng.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphaWRoa3ppemp1aGVudXp0eG5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NjI1NTEsImV4cCI6MjAyNzIzODU1MX0.21IttlVYWLtK_5m_jp2m24FuB8JyMPFhC-PmkSCPg94');

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const { data, error } = await supabase
        .from('contacts')
        .insert([
            {
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            },
        ]);
    
    if (error) {
        alert('There was an error submitting your form, please try again.');
        console.error(error);
    } else {
        alert('Thank you for your message!');
        e.target.reset(); // Reset form fields after successful submission
    }
});
