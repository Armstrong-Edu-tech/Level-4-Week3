const fs = require('fs');
const {readFile, writeFile} = require('fs');

// get files path

TestFilesPath=__dirname + '\\TestFiles\\';

console.log('================================');

//====================== Read File 1 =====================
 
console.log('Read File 1');
console.log('Starting Read File 1......');

readFile(TestFilesPath+'test1.txt','utf-8', function(err1, Data1){
    if (err1){   console.log(err1);      
    }else
    {console.log('Data: \n' , Data1);}
  });
  
console.log('Ending Read File 1......');
console.log('================================');
  
 //===========================================================
  
console.log('Read File 2');
console.log('Starting Read File 2......');
readFile( TestFilesPath+'test2.txt' ,'utf-8',(err2, Data2)=>{
    if (err2){   console.log(err2);      
    }else{console.log('Data: \n' , Data2);}
  });
 console.log('Ending Read File 2......');
console.log('================================');