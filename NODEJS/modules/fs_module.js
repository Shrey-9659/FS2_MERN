// fs module : Allows you to interact with the file system like create, read, update, delete files and directories

const fs = require("fs");

// reading files
// const fileRead = fs.readFileSync("example.txt", "utf-8")

// fs.readFile("example.txt", "utf-8", (err, data) => {
//     if(err) throw err;
//     else console.log(data)
// })

// Writing files
// fs.writeFileSync("example.txt", "Hello Shrey Khandelwal")
// fs.writeFile("example.txt", "Hello Shrey Coming from Async Code", (err, data) => {
//     if(err) throw err;
//     console.log("Data added in file")
// })

// Append File
// fs.appendFileSync("example.txt", "New data appending\n")
// fs.appendFile("example.txt", "New Data via Async code", (err, data) => {
//     if(err) throw err;
//     console.log("New data appended")
// })

// Deleating a file
// fs.unlink("example.txt", (err) => {
//     if(err) throw err;
//     console.log("File deleted successfully")
// })

// Creating Directory
// fs.mkdir("Example_Dir", (err) => {
//     if(err) throw err;
//     console.log("Dir created")
// })