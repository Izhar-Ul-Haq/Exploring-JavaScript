// OS Module
const os = require("os")
console.log(os.arch());

const freeMemory = os.freemem();
console.log(freeMemory); // Memory in Bytes

console.log(`${freeMemory/1024/1024/1024}`)

const totalMemory = os.totalmem();
console.log(totalMemory);
console.log(`${totalMemory/1024/1024/1024}`);

console.log(os.hostname())
console.log(os.platform())

console.log(os.homedir())
console.log(os.machine())
console.log(os.tmpdir())
console.log(os.userInfo())
console.log(os.type())

