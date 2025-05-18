const { processData } = require('./utils');

// Example usage
const inputData = [
  { name: 'email', value: 'valid@example.com' },
  { name: 'email', value: 'invalid@' },
  { name: 'name', value: 'John Doe' },
  { name: 'email', value: '@invalid' },
];

const validEmails = processData(inputData);
console.log(validEmails); // Output: [{ name: 'email', value: 'valid@example.com' }]