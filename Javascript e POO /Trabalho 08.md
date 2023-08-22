# Desenvolvimento
  Criar dois códigos, sendo um para calcular a média de 3 notas de um aluno, utilizando operadores de atribuição e ternário
e outro em que se receba duas notas e exiba quanto o aluno precisa para ser aprovado por média.
---

# Resolução

```
var n1 = Number(prompt('Digite a primeira nota: '))
var n2 = Number(prompt('Digite a segunda nota: '))
var n3 = Number(prompt('Digite a terceira nota: '))
var media = (n1 + n2 + n3) / 3

var notaParcial = n1 + n2
var notaNecessaria = 21 - (n1 + n2) //Considerando uma média 7, a soma das notas têm que ser no mínimo 21

console.log(`O aluno precisa de ${notaNecessaria} pontos para ser aprovado por média.`)

var resultado = (media < 7) ? 'REPROVADO' : 'APROVADO'

console.log(`A média foi: ${media.toFixed(1)}`)
console.log(resultado)
