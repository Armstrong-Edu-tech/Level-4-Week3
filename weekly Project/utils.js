// utils.js
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function calculateArea(length, width) {
  return length * width;
}

module.exports = { celsiusToFahrenheit, calculateArea };
