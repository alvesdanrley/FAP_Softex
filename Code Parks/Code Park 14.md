# Desenvolvimento

Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

---

# Resolução

```
var nome, nascimento, idade
var cont = true

nome = readline.question('Insira seu nome: ')
while (cont) {
    try {
      nascimento = readline.questionInt('Insira o ano do seu nascimento: ')
        if (nascimento >= 1922 && nascimento <= 2021) {
            idade = 2023 - nascimento
            console.log(`Sua idade é ${idade} anos.`)
            cont = false
        } else {
            console.log('Valor inválido, digite novamente!')
        }
    } catch (error) {
        console.log(error)
        console.log('Valor inválido!')
    }
}
