const fs = require("fs");
const crypto = require("crypto");
start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => {
  console.log("Timere 1 finished");
}, 0);
setImmediate(() => {
  console.log("Immediate 1 finished");
});

fs.readFile("test-file.txt", "utf-8", () => {
  console.log("I/O finished");
  setTimeout(() => {
    console.log("Timere 2 finished");
  }, 0);
  setTimeout(() => {
    console.log("Timere 3 finished");
  }, 3000);
  setImmediate(() => {
    console.log("Immediate 2 finished");
  });

  process.nextTick(() => console.log("Process.nextTick()"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
});
