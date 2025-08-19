// res.write can be used multiple times in a single req, whereas res.end can only be used once per request.

const http = require("http")
const PORT = 8080;
// console.log(http)

const app = http.createServer((req, res) => {
    if(req.url === "/"){
        // res.writeHead(500, {"content-type" : "text/html"})
        // res.write("I am on home page")
        // res.write("I am on home page again")
        res.end("I am on home page")
        // res.end("I am on home page again")
    }
    if(req.url === "/about"){
        console.log("I am on about us page")
    }
})


app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})