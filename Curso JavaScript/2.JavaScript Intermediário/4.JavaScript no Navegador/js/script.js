let newDiv = document.createElement("div")
newDiv.textContent = "Div Criada via JS/DOM"
newDiv.setAttribute("id", "div-com-js")
newDiv.setAttribute("class", "div-com-js")
document.querySelector("body").appendChild(newDiv)