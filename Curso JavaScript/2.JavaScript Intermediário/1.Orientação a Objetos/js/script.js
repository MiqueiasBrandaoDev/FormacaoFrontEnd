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

//definindo valor fixo da propriedade para um elemento no prototype
const dependentes = Symbol()
Paciente.prototype[dependentes] = 2

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

//obter valor fixo configurado prototype
console.log(newName[dependentes])
console.clear()

//simulando um comentário de alguma página
class Coment{

    //construindo os atributos
    constructor(title, id, username, tags){
        this.title = title
        this.id = id
        this.username = username
        this.tags = tags
    }

    //usando o GET para exibir/retornar os dados
    get getComent(){
        return {
            "title": this.title,
            "id": this.id,
            "username": this.username,
            "tags": this.tags
        }
    }

    //usando o SET para alterar/Setar algum atributo
    set setComentTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }

    //método para alterar um atributo usando SET
    set updateTitle(newtitle){
        this.title = newtitle
    }
}

//instanciando a classe e inserindo os atributos
const newComent = new Coment("title teste", 123, "miqueiasbrandaoo")

//setando as tags com o atributo SET usado na construção do método
newComent.setComentTags = "desenvolvimento, evolução, constancia, aprendizado"

//exibindo o objeto criado
console.log(newComent)

//alterando o titulo
newComent.updateTitle = "Titulo alterado"

//simulando envio do objeto para o banco de dados
const enviarBD = newComent
console.log(enviarBD)

//nova aula de herança
console.clear()

// classe pai
class Eu{
    constructor(nome){
        this.nome = nome
    }
}

class Logout extends Eu{
    constructor(nome){

        //alterando a propriedade da class pai
        super(nome)

        //constinuar a construção dos atributos
        this.isLogout = true

    }
}

const login = new Logout("Miqueias_brandaoo")
console.log(login)

//retorna se uma instancia faz parte da classe informada
console.log(login instanceof Logout)
