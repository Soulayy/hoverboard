let carré
let mybody = document.body

let container = document.createElement("div")
mybody.appendChild(container)

container.setAttribute("class", "container")


for (let i = 0; i < 483; i++) {
    carré = document.createElement("div")
    carré.setAttribute("class", "hoverbord")
    // carré.setAttribute("style", "backgroundcolor")
    container.appendChild(carré)
}

let color = ["#000000", "#FFFFFF", "#FF00FF", "#00FFFF", "#FFFF00", "#0000FF", "#00FF00", "#FF0000"];


Array.from(document.querySelectorAll(".hoverbord")).forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.background = color[Math.floor(Math.random()*color.length)]
        
    })
    element.addEventListener("mouseout", () => {
        element.style.background = "#000000"
        element.style.transition = "1s"
    })
});

