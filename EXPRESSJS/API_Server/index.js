const express = require("express");
const PORT = 8080;
const userAPI = "https://jsonplaceholder.typicode.com/users"
const app = express()

app.get("/api/user", async (req, res) => {
    const response = await fetch(userAPI)
    const userData = await response.json();
    res.json(userData)
})

// Dynamic Routing
app.get("/api/user/:id", async (req, res) => {
    const id = req.params.id
    const response = await fetch(userAPI)
    const userData = await response.json();
    const singleUser = userData.find((user) => user.id == id)
    if(singleUser) return res.json(singleUser)
        else return res.json({success : false, msg : "No user found"})
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})