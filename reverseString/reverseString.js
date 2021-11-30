const reverseString = (str) => {
  if (typeof str !== "string") {
    return "You must provide a string";
  }
  return str.split("").reverse().join("");
};

module.exports = reverseString;
