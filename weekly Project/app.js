const os=require('os')
const fs=require('fs')
const http=require('http')
const {celsiusToFahrenheit , calculateArea}=require('./utlis.js')
const platform=os.platform();
const totalMemory=os.totalmem();
const freeMemory=os.freemem();

console.log(`plateform: ${platform}`)
console.log(`totalMemory: ${totalMemory}`)
console.log(`freeMemory: ${freeMemory}`)

const logData=`platform: ${platform}\n TotalMemory:${totalMemory}\n freeMemory:${freeMemory}`

fs.writeFile('log.txt',logData,(err)=>{
    if(err) console.log(err);
    else console.log('system info saved successfully')
})

const temp=celsiusToFahrenheit(30);
const area=calculateArea(5,10);

console.log(`30c=${temp}F`);
console.log(`Area of 5*10=${area}`);

fs.appendFile('log.txt',`30c=${temp}F \n Area of 5*10=${area}`,(err)=>{
    if(err)console.log(err)
        else console.log('calculations append successfully')
})

http.get('http://api.open-notify.org/astros.json',(res)=>{
    let data='';
    res.on('data',chunck=>{data +=chunck});
    res.on('end',()=>{
        console.log('data fetched from API ',data)
        fs.appendFile('log.txt',`http data:\n ${data}`,(err)=>{
    if(err)console.log(err)
        else console.log('http data append successfully')
})
    }).on('error',err=>{
        console.log('error fetching HTTP data',err.messsage)
    })
})
