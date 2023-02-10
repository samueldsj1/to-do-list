const moment = require('moment')
const process = require("process");
console.log(moment ().format('HH:mm'))
console.log("qual seu nome?")
  process. stdin.on("data", (keyboard)=>{
    process.stdout.write(`usuario : ${keyboard}`);
    process.exit();
  })
  

  

