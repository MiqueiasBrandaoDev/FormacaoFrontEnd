document.addEventListener("click", function(click){

    if(click.pointerId == 1){
        var element = document.querySelector("main");
        //element.classList.toggle("hide");  
    }

})


//obtendo arquivo a selecionar - ativar somente o script que foi selecionado pelo usuário
let arquive = document.querySelector("#cars").value
let lineScript = document.querySelectorAll(`script #estrutura_de_programacao`)
console.log(arquive)
console.log(lineScript)