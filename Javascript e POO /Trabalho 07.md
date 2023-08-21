# Desenvolvimento

Criar uma calculadora que receba dois valores e uma operação e mostre o resultado.
---

# Resolução

```
const readline = require('readline-sync')

while (true) {
  console.log('---CALCULADORA---')
  console.log('Escolha sua operação: + , - , * ou /')
  let op = prompt('Digite a operação de sua escolha: ')
  let n1 = readline.questionFloat('Digite o primeiro número: ')
  let n2 = readline.questionFloat('Digite o segundo número: ')
  let resultado = 0

  switch (op) {
    case '+':
      resultado = n1 + n2
      console.log(`O resultado da operação escolhida é ${resultado}`)
      break

    case '-':
      resultado = n1 - n2
      console.log(`O resultado da operação escolhida é ${resultado}`)
      break
    
    case '*':
      resultado = n1 * n2
      console.log(`O resultado da operação escolhida é ${resultado}.`)
      break

    case '/':
      resultado = n1 / n2
      let resto = n1 % n2
      console.log(`O resultado da operação escolhida é ${resultado} e o resto é ${resto}`)
      break

    default:
      console.log('Opção inválida')
      
  }
  const continuar = prompt('Deseja continuar(S/N)? ')
  if (continuar == 'N') {
    break
  }
}
