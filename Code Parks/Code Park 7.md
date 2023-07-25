Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, como nos exemplos em anexo.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número.

-----------------------------------------------

# Resolução

```
let number = Number(prompt('Digite um número que você deseja saber a tabuada: '))

for (i = 0; i <= 10; i++) {
    let times = number * i
    console.log(`${number} x ${i} = ${times}`)
}
