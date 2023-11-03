//Usando setTimeOut
setTimeout(() => {
    console.log("Esperou 2 segundos")
}, 2000);
console.log("Executou no load da page") //ele executa primeiro do que a função assincrona


//setInterval - Não para de ser executada
setInterval(() => {
    console.log("Executa com um intervalo de 3 segundos")
}, 3000);

//Promises
const somar = Promise.resolve(
    5+"dfsdf"
)

.then((value) => {
    if(Number.isNaN(value)){
        throw new Error("Erro no tipo do conteúdo");
    }
    else{
        console.log("número válido")
        return value
    }
})

.then((value) => {
    console.log(`A soma é ${value}`)
})

.then((value) => {
    valorFinal = value - 1
    console.log(`O resultado menos 1 é ${valorFinal}`)
})

.catch((err) => console.log(`Houve algum erro: ${err}`))