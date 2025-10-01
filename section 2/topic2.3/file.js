const fs = require("fs");

const data = "\nLearn Node.js";

// Append data to file
fs.appendFileSync("input.txt", data, "utf8");
console.log("Data is appended to file successfully.");