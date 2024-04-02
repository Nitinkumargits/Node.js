const fs = require("fs");
const textIN = fs.readFileSync("../01.Node-fram/txt/input.txt", "utf-8");
console.log(textIN);

const textOUT = `This is what we know about avacado  : ${textIN}\n create on ${Date.now()}.`;
fs.writeFileSync("../01.Node-fram/txt/output.txt", textOUT);
