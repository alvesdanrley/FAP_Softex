class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    saudacao() {
        return `Olá, ${this.nome}!`
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, salario) {
        super(nome,idade)
        this.cargo = cargo
        this.salario = salario
    }
}

let pessoa1 = new Pessoa('Jorge', 25)
let func1 = new Funcionario('Tales', 24, 'Professor', 1000)

console.log(pessoa1)
console.log(pessoa1.saudacao())
console.log(func1)
console.log(func1.saudacao())
