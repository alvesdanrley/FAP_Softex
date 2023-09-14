const readline = require('readline-sync')

try {
  const n1 = readline.questionInt('Digite um número: ')
  const n2 = readline.questionInt('Digite outro número: ')
  const resultado = n1 / n2
  console.log(resultado)
} catch (error) {
  console.error('Erro: ', error.message)
} finally {
  console.log('Aplicação finalizada')
}
