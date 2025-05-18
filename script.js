// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // BUG: Email validation is not working properly
    if (!formData.email.includes('@')) {
        alert('Please enter a valid email');
        return;
    }
    
    // TODO: Add loading spinner here
    
    // Simulate API call with callback (should be converted to async/await)
    submitForm(formData, function(error, response) {
        if (error) {
            document.getElementById('result').innerHTML = 'Error: ' + error;
        } else {
            document.getElementById('result').innerHTML = 'Success: ' + response;
        }
    });
});

// Callback-based form submission (should be converted to async/await)
function submitForm(data, callback) {
    setTimeout(function() {
        // BUG: No input sanitization - XSS vulnerability
        if (Math.random() > 0.5) {
            callback(null, 'Message sent successfully!');
        } else {
            callback('Network error', null);
        }
    }, 2000);
}