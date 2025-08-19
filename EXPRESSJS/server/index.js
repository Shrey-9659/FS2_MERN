const express = require("express")
const path = require("path")
const fs = require("fs")
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
    fs.appendFile("user.json", JSON.stringify(userData), (err) => {
        if(err){
            res.status(500).send("Unable to add data")
        }else{
            res.status(200).send("Data added")
        }
    })
    
    res.send("Form submitted")
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})