// button

document.getElementById('click-me').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    
    if (messageDiv.textContent === 'Button clicked!') {
        // Hide the message
        let opacity = 1;
        const interval = setInterval(() => {
            opacity -= 0.1;
            if (opacity <= 0) {
                clearInterval(interval);
                messageDiv.textContent = ''; // Clear the text content when completely hidden
            }
            messageDiv.style.opacity = opacity;
        }, 100);
    } else {
        // Show the message
        messageDiv.textContent = 'Button clicked!';
        messageDiv.style.opacity = 0;

        let opacity = 0;
        const interval = setInterval(() => {
            opacity += 0.1;
            if (opacity >= 1) {
                clearInterval(interval);
            }
            messageDiv.style.opacity = opacity;
        }, 100);
    }
});

