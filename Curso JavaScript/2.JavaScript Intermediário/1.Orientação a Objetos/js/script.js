//CRIANDO MÉTODOS
let pessoa = {
    cumprimento: function(){
        return "Olá, bom dia"
    },
    despedida: function(){
        return "Estou de saída, Tchau!"
    }
}
console.log(pessoa.cumprimento())
console.log(pessoa.despedida())


//APROFUNDANDO MÉTODOS
console.clear() //limpando console para melhor entendimento
let carro = {

    model: "",

    setModel: function(newModel){
        this.model = newModel
    },

    getModel: function(){
        return this.model
    }

}
carro.setModel("Modelo Teste")
console.log(carro.getModel())


//FUNÇÕES COM CLASSE

//FUNÇÃO CONSTRUTORA
function criarCachorro(name, cor, raça){
    const cachorro = Object.create({})
    cachorro.name = name
    cachorro.cor = cor
    cachorro.raça = raça
    return cachorro
}

let bob = criarCachorro("bob", "preto", "pit")
console.log(bob)