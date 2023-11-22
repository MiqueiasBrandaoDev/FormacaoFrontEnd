//capturando click do botão
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()

    if(!document.querySelector("#input-url").value == ""){

        //apresentando na card do QR Code
        document.querySelector(".image-qr").classList.add("hide")
        document.querySelector(".spinner-border").classList.remove("hide")
        
        document.querySelector(".card-image").classList.remove("hide")        
        document.querySelector(".spinner-border").classList.remove("hide")        

        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${document.querySelector("#input-url").value}`)
        .then(response => {

            if(response.status == 200){
            
                //inserindo link do QR gerado no html
                document.querySelector(".image-qr").setAttribute("src", `${response.url}`)
                
                //apresentando na tela o QR Code
                document.querySelector(".image-qr").classList.remove("hide")
                document.querySelector(".spinner-border").classList.add("hide")

            }

        })

    }
    else{
        console.log("Input Vazio")
        document.querySelector("#input-url").setAttribute("style", "border: red solid 2px")
        document.querySelector("#input-url").setAttribute("placeholder", "Preencha este campo")
        document.querySelector(".card-image").classList.add("hide")
    }
})
