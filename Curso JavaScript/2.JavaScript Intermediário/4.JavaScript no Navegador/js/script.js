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


let eventDesconto = false
document.addEventListener("mousemove", (e) => {


    if(e.y <= 20 && eventDesconto === false){
        
        eventDesconto = true
        let newElement = document.createElement("h1")
        newElement.textContent = "Não saia agora, resgate 50% de desconto!"
        newElement.setAttribute("id", "desconto")
        document.querySelector("body").appendChild(newElement)
        
        let btn = document.createElement("button")
        btn.textContent = "Resgate aqui seu desconto"
        btn.setAttribute("id", "desconto-btn")
        document.querySelector("body").appendChild(btn)

    }

    if(document.querySelector("#desconto") && e.y > 22){

        document.querySelector("#desconto").remove()
        document.querySelector("#desconto-btn").remove()
        eventDesconto = false

    }

})

