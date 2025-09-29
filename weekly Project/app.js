// app.js
const os =require('os')

const platform=os.platform()
const totalMem=os.totalmem()
const freeMem=os.freemem()
console.log(`Platform: ${platform}`)
console.log(`totalMem: ${totalMem}`)
console.log(`freeMem : ${freeMem}`)

const fs=require('fs')

const logData=`platform: ${platform} \n TotalMem: ${totalMem} \n ${freeMem}`

fs.writeFile('log.txt',logData,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('data added successfully')
})
const {celsiusToFahrenheit,calculateArea}=require('./utils.js')
const temp=celsiusToFahrenheit(30)
const area=calculateArea(5,10)
console.log(`30°C = ${temp}°F`);
console.log(`Area of 5x10 = ${area}`);

fs.appendFile("log.txt",`30°C = ${temp}°F \nArea of 5x10 = ${area} `,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('data appended successfully')
})

