document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()

    fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com")
    .then(response => {

        console.log(response.url)

        if(response.status == 200){
            console.log("Requisição concluída com sucesso")
        
            const url = response.url 
            document.querySelector(".image-qr").setAttribute("src", `${url}`)
            

        }

    })

})
