const fs = require("fs");
const a = 99;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer Expired"), 15);

process.nextTick(() => console.log("process nextTick"));

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the file.");
