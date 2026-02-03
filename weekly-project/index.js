const os = require("os");

const platform = os.platform();
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`plateform: ${platform}`);
console.log(`totalMemory: ${totalMemory}`);
console.log(`freeMemory: ${freeMemory}`);

const fs = require("fs");

const logData = `platform: ${platform}\n TotalMemory:${totalMemory}\n freeMemory:${freeMemory}`;

fs.writeFile("log.txt", logData, (err) => {
    if (err) console.log(err);
    else console.log("system info saved successfully");
});

const { celsiusToFahrenheit, calculateArea } = require("./utils");

const temp = celsiusToFahrenheit(30);
const area = calculateArea(5, 10);

console.log(`30c=${temp}F`);
console.log(`Area of 5*10=${area}`);

fs.appendFile("log.txt", `\n 30c=${temp}F\n Area of 5*10=${area}`, (err) => {
    if (err) console.log(err);
    else console.log("calculations append successfully");
});