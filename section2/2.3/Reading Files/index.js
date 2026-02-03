const fs = require('fs');

console.log('--- Start of Program ---');
// A. Asynchronous Read
fs.readFile('file1.txt', 'utf8', (err, data1)=>{
    if (err) {
        console.log('Error reading File 1:', err);
        return;
    }
    console.log('Result 1 (Async):', data1);
})
// B. Asynchronous Read
const data2 = fs.readFileSync('file2.txt', 'utf8');
console.log('Result 2 (Sync): ', data2);

console.log('--- End of Program ---');