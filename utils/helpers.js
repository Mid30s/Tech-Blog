module.exports = {
  format_date: (date) => {
    if (!date) {
      return "";
    }
    // Format date as MM/DD/YYYY
    return date.toLocaleString("en-AU");
  },

  // format plural words
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },
};
