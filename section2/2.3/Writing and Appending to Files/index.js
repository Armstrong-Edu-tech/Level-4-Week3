const fs = require('fs');

const content = "Hello! This is the fresh content of the file.";

fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) {
        console.error("Error writing to file:", err);
        return;
    }

    console.log('Success: The write command was sent!');

    const extraLine = "\nThis is a new line added to the end.";

    fs.appendFile('output.txt', extraLine, 'utf8', (err) => {
        if (err) {
            console.error("Error appending to file:", err);
            return;
        }
        console.log("Success: The append command finished!");
    })
})