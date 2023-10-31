// método Math - método para números
// max() - retorna o maior numero
console.log(Math.max(2,3,55,43,232))

//min() - retorna o menor numero
console.log(Math.min(2,3,55,43,232))

//flor() - retorna o numero arredondado para baixo
console.log(Math.floor(2.3432))

//ceil() - retorna o numero arredondado para cima
console.log(Math.ceil(2.3432))
console.clear()


//condicionais com switch
switch ("Programador") {
    case "Programador":
        console.log("Sua profissão é: Programador")        
        break;

    case "Advogado":
        console.log("Sua profissão é: Advogado")
        break;

    case "Motorista":
        console.log("Sua profissão é: Motorista")
        break;

    default: 
        console.log("Profissão não encontrada")
        break;
}