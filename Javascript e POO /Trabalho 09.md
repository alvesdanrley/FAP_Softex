# Desenvolvimento
Criar uma calculadora utlizando funções sem parâmetro, com parâmetro e retorno e arrow functions.

---

# Resolução

```
function exibirCalc() {
    console.log('CALCULADORA')
    console.log('1. Adição ')
    console.log('2. Subtração ')
    console.log('3. Multiplicação ')
    console.log('4. Divisão ')
}

const adicao = function(n1, n2) {
    return n1 + n2
}
const subtracao = function(n1, n2) {
    return n1 - n2
}
const multiplicacao = function(n1, n2) {
    return n1 * n2
}
const divisao = (n1, n2) => {
    if (n2 != 0) {
    return n1 / n2
    } else {
        console.log('Não é possível dividir por 0')
    }
}

function calculadora() {
    exibirCalc()
    const operator = Number(prompt('Digite a operação escolhida: '))
        if (operator >= 1 && operator <= 4) {
            const n1 = Number(prompt('Digite o primeiro valor: '))
            const n2 = Number(prompt('Digite o segundo valor: '))

            let result = 0
            switch (operator) {
                case 1:
                    result = adicao(n1, n2)
                    break
            
                case 2:
                    result = subtracao(n1, n2)
                    break
                case 3:
                    result = multiplicacao(n1, n2)
                    break
                case 4:
                    result = divisao(n1, n2)
                    break
                default:
                    console.log(Error)
            
            } 
            console.log(`Resultado da operação: ${result}`)
        } else {
            console.log('Opção inválida')
        }
}

calculadora()
