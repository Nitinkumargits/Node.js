const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");
/**   
      //////////////////////////////////////////////
      /////----FILE System
      //blocking synchronous
      // const textIN = fs.readFileSync("../01.Node-fram/txt/input.txt", "utf-8");
      // console.log(textIN);

      // const textOUT = `This is what we know about avacado  : ${textIN}\n create on ${Date.now()}.`;
      // fs.writeFileSync("../01.Node-fram/txt/output.txt", textOUT);

      //Non-blocking asynchronous

      // fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
      //   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
      //     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      //       console.log(data2);
      //       fs.writeFile("./txt/final.txt", `${data2}\n ${data3}`, "utf-8", (err) => {
      //         console.log("file has been written 🌪🌪✅👨‍🦳");
        //       });
        //     });
        //   });
        // });
*/
//////////////////////////////////////////////
/////----Server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "Hello World ",
    });
    res.end("<h1>Page Not found 💀💀</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port number : 8000 🚁");
});
