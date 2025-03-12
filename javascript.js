// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic client-side validation (you can add more robust validation)
    if (!name || !email || !message) {
        document.getElementById('message-display').textContent = 'Please fill in all fields.';
        document.getElementById('message-display').style.backgroundColor = '#ffe0e0';
        return;
    }

    // Simulate sending data (replace with actual backend interaction)
    setTimeout(() => {
        document.getElementById('message-display').textContent = 'Message sent successfully!';
        document.getElementById('message-display').style.backgroundColor = '#e0ffe0';
        document.getElementById('contact-form').reset(); //Clear the form.
    }, 500);

    
});