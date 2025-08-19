const http = require("http")
const fs = require("fs")
const queryString = require("querystring")
const PORT = 8008;

const app = http.createServer((req, res) => {
    if(req.url === "/"){
        const formFile = fs.readFileSync("public/index.html", "utf-8")
        res.end(formFile)
    }else if(req.url === "/style.css"){
        const formStyle = fs.readFileSync("public/style.css", "utf-8")
        res.end(formStyle)
    }else if(req.url === "/submit" && req.method === "POST"){
        let body = "";
        req.on("data", (chunk) => {
            body = body + chunk.toString();
        })
        req.on("end", () => {
            const formData = queryString.parse(body);
            const log = `Name : ${formData.name}, Email : ${formData.email}, Message : ${formData.message}\n`
            fs.appendFile("logData.txt", log, (err) => {
                if(err){
                    res.writeHead(500, {"content-type" : "text/plain"})
                    res.end("Error saving data")
                }else{
                    res.writeHead(200, {"content-type" : "text/plain"})
                    res.end("Form submitted successfully")
                }
            })
        })
    }else{
        res.writeHead(405, {"content-type" : "text/plain"})
        res.end("Route not available")
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

