// Utility functions

// BUG: This email validation is too simple
function validateEmail(email) {
    return email.includes('@');
}

// TODO: Add function to sanitize HTML input
function sanitizeInput(input) {
    // Not implemented - security vulnerability
    return input;
}

// Helper function for form data
function getFormData(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    return data;
}