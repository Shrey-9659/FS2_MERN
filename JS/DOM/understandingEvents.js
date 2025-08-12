// common events 
// mouse -> cancelIdleCallback, dbclick, mouseover, mouseout, mousemove
// keyboard -> keydown, keyup, keypress
// form -> submit, change, focus, blue, input
// window -> scroll, load, resize

const heading = document.getElementById("heading")
const btn = document.getElementById("btn")

// EventListener
// btn.addEventListener("click", function(){})
// btn.addEventListener("click", () => {
//     heading.innerText = "Understanding JavaScript in DOM"
// })

// Event Object
btn.addEventListener("click", (event) => {
    // console.log(event.type)
    // console.log(event.target)
})