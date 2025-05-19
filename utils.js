// Utility functions

// BUG: This email validation is too simple
function validateEmail(email) {
  // Regex pattern for email validation
  const emailRegex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";

  // Test the email against the regex pattern
  return emailRegex.test(email);
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
