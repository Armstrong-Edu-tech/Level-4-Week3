const fs = require("fs");

console.log("writing into existing file");
fs.writeFile("input.txt", "Hello Hello node js", function (err) {
	if (err) {
		return console.error(err);
	}

	console.log("Data written successfully!");
	console.log("Let's read newly written data");

	fs.readFile("input.txt", function (err, data) {
		if (err) {
			return console.error(err);
		}
		console.log("Asynchronous read: " + data.toString());
	});
});
