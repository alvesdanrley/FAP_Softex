# Desenvolvimento

Crie uma lista encadeada em que cada elemento representa uma pessoa. </br> Ela precisa conter informações como nome, idade e referência ao filho dela.

---
# Resolução


![listaEncadeada](https://github.com/alvesdanrley/FAP_Softex/assets/129902303/13ecd8af-01f9-4f2a-afc9-0716737fe04b)


---
# Código em JS

```
class Pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

// Criando as instâncias de pessoas
const pessoa1 = new Pessoa("Jorge", 35)
const pessoa2 = new Pessoa("Anastasia", 30)
const pessoa3 = new Pessoa("Valdo", 10)
const pessoa4 = new Pessoa("Charlotte", 5)

// Definindo os filhos
pessoa1.filho = pessoa3
pessoa2.filho = pessoa4

// Montando a lista encadeada
pessoa1.filho.filho = pessoa2

// Percorrendo a lista encadeada e exibindo informações
let pessoaCabeca = pessoa1
while (pessoaCabeca) {
    console.log(`Nome: ${pessoaCabeca.nome}, Idade: ${pessoaCabeca.idade}`)
    if (pessoaCabeca.filho) {
        console.log(`Filho: ${pessoaCabeca.filho.nome}`)
    } else {
        console.log("Sem filho")
    }
    pessoaCabeca = pessoaCabeca.filho
}
