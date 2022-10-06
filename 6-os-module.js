const os = require('os');
// info about user 
const user = os.userInfo()
console.log("🚀 ~ file: app.js ~ line 45 ~ user", user)


// method return the system uptime in  seconds

console.log(`the system uptime is ${os.uptime()} seconds`);


const currentOS = {
    name:os.type(),
    release : os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);