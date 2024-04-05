const EventEmitter = require("events");
const http = require("http");

/** 
    class Sale extends EventEmitter {
    constructor() {
        super();
    }
    }

    const myEmitter = new Sale();

    //listener event
    myEmitter.on("newSale", () => {
    console.log("There was a new sale");
    });

    myEmitter.on("newSale", () => {
    console.log("my name is Nitin");
    });

    myEmitter.on("newSale", (stocks) => {
    console.log(`There are now ${stocks} item left in stocks`);
    });
    //emits events
    myEmitter.emit("newSale", 9);
*/

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recivied");
  res.end("RECIVIDE REQUEST");
});
server.on("request", (req, res) => {
  console.log("Another recivied");
});
server.on("close", (req, res) => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("wating for request...");
});
