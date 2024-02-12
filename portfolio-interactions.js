document.querySelectorAll('.job-header').forEach(header => {
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
