document.addEventListener("click", function(click){

    if(click.pointerId == 1){
        var element = document.querySelector("main");
        //element.classList.toggle("hide");  
    }

})


document.querySelector("#module").addEventListener("change", function(event){
    let selecinado = document.querySelector("#module").value

    // Salva o valor no localStorage
    localStorage.setItem("opcaoSelecionada", selecinado);

    //exclui o elemento anterior
    let existElement = document.querySelector(".dynamic-script")
    if(existElement){
        existElement.classList.remove("dynamic-script")
        existElement.remove()
    }

    //insere o novo elemento
    let newScript = document.createElement('script')
    newScript.setAttribute('src', `js/${selecinado}.js`)
    document.querySelector("body").appendChild(newScript)   

    //limpar console.log
    console.clear();
})


// Verifica se há uma opção salva no localStorage ao carregar a página
window.onload = function() {
    // Obtém a opção salva no localStorage
    var opcaoSalva = localStorage.getItem("opcaoSelecionada");
    
    // Se houver uma opção salva, define-a como a opção selecionada no select
    if (opcaoSalva) {
        document.getElementById("module").value = opcaoSalva;

        let selecinado = document.querySelector("#module").value

        // Salva o valor no localStorage
        localStorage.setItem("opcaoSelecionada", selecinado);

        //exclui o elemento anterior
        let existElement = document.querySelector(".dynamic-script")
        if(existElement){
            existElement.classList.remove("dynamic-script")
            existElement.remove()
        }

        //insere o novo elemento
        let newScript = document.createElement('script')
        newScript.setAttribute('src', `js/${selecinado}.js`)
        document.querySelector("body").appendChild(newScript)   

        //limpar console.log
        console.clear();

    }
  };