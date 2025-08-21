const express = require("express")
const userAPI = "https://jsonplaceholder.typicode.com/users"
const requestLogger = (req, res, next) => {
    if(req.url == "/shrey"){
        console.log("Enter a valid route")
    }else{
        console.log(req.url)
        next()
    }
}

const customMiddleWare = (req, res, next) => {
    console.log("I will only work on particular routes")
    next()
}

const requestLoggerTwo = (req, res, next) => {
    console.log("I am coming from another middleware")
    next()
}

const app = express()

app.use(requestLogger);



app.get("/api/user", async (req, res) => {
    const response = await fetch(userAPI)
    const userData = await response.json();
    res.json(userData)
})
app.use(requestLoggerTwo)

app.get("/api/user/:id", customMiddleWare , async (req, res) => {
    const id = req.params.id
    const response = await fetch(userAPI)
    const userData = await response.json();
    const singleUser = userData.find((user) => user.id == id)
    if(singleUser) return res.json(singleUser)
        else return res.json({success : false, msg : "No user found"})
})

app.get("/shrey", (req, res) => {
    res.send("<h1>I am on shrey route</h1>")
})

app.listen(8080)