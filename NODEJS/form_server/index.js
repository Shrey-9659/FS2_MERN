const http = require("http")
const fs = require("fs")
const PORT = 8008;

const app = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === "/"){
        const formFile = fs.readFileSync("public/index.html", "utf-8")
        res.end(formFile)
    }else if(req.url === "/style.css"){
        const formStyle = fs.readFileSync("public/style.css", "utf-8")
        res.end(formStyle)
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

