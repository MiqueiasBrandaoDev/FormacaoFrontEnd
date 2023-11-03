let newDiv = document.createElement("div")
newDiv.textContent = "Div Criada via JS/DOM com insertBefore"
newDiv.setAttribute("id", "div-com-js")
newDiv.setAttribute("class", "div-com-js")
//insertBefore - insere antes de um elemento, setando primeiramento um elemento pai
document.querySelector("body").insertBefore(newDiv, document.querySelector("h1"))



let newDivComAppendChild = document.createElement("div")
newDivComAppendChild.textContent = "Div Criada via JS/DOM"
newDivComAppendChild.setAttribute("id", "div-com-js")
newDivComAppendChild.setAttribute("class", "div-com-js")
//appendChild - insere um elemento dentro de outro elemento
newDivComAppendChild.textContent = "Agora com o appendChild"
document.body.appendChild(newDivComAppendChild)


document.querySelector("h1").remove()