// Interface Strategy
class OperacaoStrategy {
  execute(num1, num2) {}
}

// Classes concretas que implementam a Strategy
class SomaStrategy extends OperacaoStrategy {
  execute(num1, num2) {
    return num1 + num2;
  }
}

class SubtracaoStrategy extends OperacaoStrategy {
  execute(num1, num2) {
    return num1 - num2;
  }
}

class MultiplicacaoStrategy extends OperacaoStrategy {
  execute(num1, num2) {
    return num1 * num2;
  }
}

// Contexto que utiliza a Strategy
class Calculadora {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executarOperacao(num1, num2) {
    return this.strategy.execute(num1, num2);
  }
}

// Aplicação principal
const calculadora = new Calculadora();

// Input do usuário
const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):");

// Definir a Strategy com base na operação informada
switch (operacao) {
  case '+':
    calculadora.setStrategy(new SomaStrategy());
    break;
  case '-':
    calculadora.setStrategy(new SubtracaoStrategy());
    break;
  case '*':
    calculadora.setStrategy(new MultiplicacaoStrategy());
    break;
  default:
    console.log("Operação inválida");
    break;
}

// Executar a operação e imprimir o resultado
if (calculadora.strategy) {
  const resultado = calculadora.executarOperacao(num1, num2);
  console.log(`Resultado da operação: ${resultado}`);
}
