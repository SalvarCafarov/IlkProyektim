let input = document.querySelector(".inp1")
let inputText = document.querySelector(".inputText")


input.addEventListener("input", () => {
    inputText.innerHTML = input.value
})

let addBtn = document.querySelector(".addBtn")
let list = document.querySelector("ul")

addBtn.addEventListener("click", () => {
    let li = document.createElement("li")
    li.innerHTML = "hello"
    list.append(li)
})

let changeBtn = document.querySelector(".change")
let container = document.querySelector(".container")

changeBtn.addEventListener("click", () => {
    let element = document.createElement("span")
    element.innerHTML = "hello"
    container.append(element)
})