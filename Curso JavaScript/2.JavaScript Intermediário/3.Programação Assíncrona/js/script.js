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
    console.log(`A soma é ${value}`)
})

.then((value) => {
    valorFinal = value - 1
    console.log(`O resultado menos 1 é ${valorFinal}`)
})

.catch((err) => console.log(`Houve algum erro: ${err}`)) 

function validarMedia(n) {
    return new Promise((resolve, reject) => {
        if(n > 6){
            resolve(`Parabens, você foi aprovado. Sua média é ${n}`)
        }
        else{
            reject(`Você foi reprovado. Sua média é ${n}`)
        }
    }).then((value) => { 
        document.write(value)
    }).catch((err) => {
        document.write(err)
    })
}

validarMedia(10)

//async functions
async function somar(a, b){
    await setTimeout(() => {
        const result = a + b
        return result
    }, 3000);
}

somar(10, 20).then((data) => { console.log(`resultado : ` + data) })
console.log("Fora do async")