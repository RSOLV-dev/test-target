/**
 * Processes an array of input values and filters out invalid email addresses.
 * @param {Array} input - An array of input values.
 * @returns {Array} - An array of valid email addresses.
 */
function processData(input) {
  const { validateEmail } = require('./validator');

  return input.filter((item) => {
    if (typeof item.value === 'string') {
      return validateEmail(item.value);
    }
    return false;
  });
}

module.exports = { processData };