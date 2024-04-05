const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const replaceTemplate = require("./moduels/replaceTemplate");
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
/////////-------Server-------------------/////////

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

/** json data */
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

/**
 *  server
 */
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  /** Overview page */
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "content-type": "text/html" });

    const cardHTML = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");

    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardHTML);
    res.end(output);

    /** api */
  } else if (pathname === "/api") {
    res.writeHead(200, { "content-type": "application/json" });

    /** Product */
  } else if (pathname === "/product") {
    res.writeHead(200, { "content-type": "text/html" });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } else {
    /** NOT found */
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
