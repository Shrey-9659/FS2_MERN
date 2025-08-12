// Selecting an element

// Old Method - getElementById, getElementByClassName, getElementByTagName
// Modern Method - querySelector, querySelectorAll
const heading = document.getElementById("heading");

// Reading the content - innerText, innerHTML, textContent
console.log(heading.innerText)

// Changing the content
heading.innerText = "Understanding JavaScript in DOM"

// Changing Attributes
heading.setAttribute("class", "domchange")
console.log(heading.getAttribute("id"))
heading.removeAttribute("class")

// Changing Styles
const btn = document.getElementById("btn");
// btn.style.backgroundColor = "gray"
// btn.style.color = "white"
// btn.classList.add("dark")
// btn.classList.remove("dark")

// Creating and Adding an Element
const newBtn = document.createElement("button")
newBtn.innerText = "Added from DOM"
// document.body.appendChild(newBtn) //Add to the end
// document.body.prepend(newBtn) // Add to the start
// btn.before(newBtn)
// btn.after(newBtn)

{/* <button>Added from DOM</button> */}