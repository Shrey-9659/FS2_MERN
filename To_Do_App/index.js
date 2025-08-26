const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const path = require("path");
const { error } = require("console");
const PORT = 8080;
const MONGO_URI = "mongodb://localhost:27017/ToDoAppExpress"

mongoose.connect(MONGO_URI)
.then(() => console.log("DB Connnected"))
.catch((err) => console.error("MongoDB connection error", err))

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    priority : {
        type : String,
        enum : ['low', 'medium', 'high'],
        default : 'medium'
    },
    createdAt:{
        type : Date,
        default : Date.now
    }
})
const Task = mongoose.model("Task", taskSchema)

const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, "public")))
app.use(cors())

// routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/api/tasks", async(req, res) => {
    try {
        const tasks = await Task.find().sort({createdAt : -1})
        res.json(tasks)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})
app.get("/api/tasks/:id", async(req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if(!task){
            return res.status(404).json({error : "Task not found"})
        }
        res.json(task)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

app.post("/api/tasks", async(req, res) => {
    console.log(req.body)
    try {
        
        const task = new Task(req.body)
        await task.save()
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

app.put("/api/tasks/:id", async(req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        if(!task){
            return res.status(404).json({error : "Task not found"})
        }
        res.json(task)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

app.delete("/api/tasks/:id", async(req, res) => {

    try {
        const task = await Task.findOneAndDelete({_id : req.params.id})
        if(!task)
            return res.status(404).json({error : "Task not found"})
        res.json({message : "Task deleted successfully"})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})