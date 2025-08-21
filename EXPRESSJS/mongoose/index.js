const express = require("express")
const mongoose = require("mongoose")
const MONGO_URI = "mongodb://localhost:27017/sampleDb"
const PORT = 8080

// MongoDB connection
mongoose.connect(MONGO_URI)
.then(() => {
    console.log("DB connection successful")
})
.catch((err) => {
    console.log(err)
})
// Creating a schema
const userSchema = new mongoose.Schema({
    id : Number,
    first_name : String,
    last_name : String,
    email : String,
    job_title : String
})
// Creating a model
const userModel = mongoose.model("user", userSchema)

const app = express();

app.get("/api/user", async (req, res) => {
    const allUsers = await userModel.find()
    res.json(allUsers)
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})