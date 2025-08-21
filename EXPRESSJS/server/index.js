const express = require("express")
const path = require("path")
const fs = require("fs");
const { json } = require("stream/consumers");
const PORT = 8080;

const formPage = path.join(__dirname, "public", "index.html")

const app = express()

// middleware
app.use(express.static("public")) //to serve static files
app.use(express.urlencoded({extended : true}));
// app.get(express.json());

app.get("/", (req, res) => {
   res.sendFile(formPage)
})

app.post("/submit", (req, res) => {
    // req.on("data", () => {})
    // req.on("end", () => {})
    const userData = req.body
    fs.readFile("user.json", "utf-8", (err, data) => {
        if(err){
            res.send("Unable to read the file")
        }else{
            if(data == false){
                fs.writeFile("user.json", `[${JSON.stringify(userData)}]`, (err) => {
                    if(err){
                        res.send("Error writing in a file")
                    }
                })
            }else{
                let parsedData = JSON.parse(data)
                parsedData.push(userData);
                fs.writeFile("user.json", JSON.stringify(parsedData), (err) => {
                    if(err){
                        res.send("Error writing in a file")
                    }
                })
            }
        }
    })
    res.send("Form submitted")
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})