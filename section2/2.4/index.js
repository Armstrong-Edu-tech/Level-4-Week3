const os = require("os");

console.log("CPU architecture: " + os.arch());

console.log("CPU/Core installed : ",os.cpus());

console.log("Free memory: " + os.freemem());

console.log("the current user’s home directory",os.homedir());

console.log("hostname : ",os.hostname());

console.log('List of network Interfaces: ' + os.networkInterfaces());

console.log("operating system platform:",os.platform());

console.log("the operating system release: ",os.release());

console.log("Total memory: " + os.totalmem());

console.log("system uptime in seconds: ",os.uptime());

console.log("OS Type:", os.type());