const btn = document.getElementById("btn")
const name = document.getElementById("name")
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(name.value)
})