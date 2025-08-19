const userControls = {
    index : (req, res) => {
    res.send("Hello from home page")
},
    contact : (req, res) => {
    res.send("Hello from Contact page")
}
}

module.exports = userControls;