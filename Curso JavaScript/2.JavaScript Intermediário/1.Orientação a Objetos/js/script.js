class Paciente{

    //ATRIBUTOS
    constructor(nome, codigo, planoSaude){
        this.nome = nome
        this.codigo = codigo
        this.planoSaude = planoSaude
    }

    //MÉTODOS
    getPacient(){
        let dados = { 
            "nome": this.nome,
            "plano de Saude": this.planoSaude,
            "codigo": this.codigo
        }
        return dados
    }

    updatePacientName(nome){

        if(nome != undefined){
            this.nome = nome
        }
        else{
            console.error("Informe o nome como parâmetro")
        }

    }

    updatePacientCodigo(codigo){

        if(codigo != undefined){
            this.codigo = codigo
        }
        else{
            console.error("Informe o codigo como parâmetro")
        }

    }

    updatePacientPlano(planoSaude){

        if(planoSaude != undefined){
            this.planoSaude = planoSaude
        }
        else{
            console.error("Informe o plano de Saude como parâmetro")
        }

    }

}

//instanciando a class com os valores
let newName = new Paciente("Maria", 123, "Unimed")
newName.getPacient()
console.log("Objeto Antes da Alteração:")
console.log(newName.getPacient())

newName.updatePacientName("Maria das Dores")//alterando um dado [nome] da class
newName.updatePacientPlano("América")//alterando dado  [plano] da class
newName.updatePacientCodigo(87123976)//alterando dado  [codigo] da class

//exibindo o objeto atual com as alterações
console.log("Objeto abaixo alterado:")
console.log(newName.getPacient())