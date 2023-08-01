# Desenvolvimento

Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário.
O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

---

# Resolução

![calculadora](https://github.com/alvesdanrley/FAP_Softex/assets/129902303/a9496f52-19b6-4208-b7a9-56ef23daf252)

---

## Código em JS

```
var op, n1, n2, res;


window.alert('CALCULADORAAAAAAA');
while (true) {
  window.alert('Selecione sua operação');
  window.alert('Soma: 1');
  window.alert('Subtração: 2');
  window.alert('Multiplicação: 3');
  window.alert('Divisão: 4');
  window.alert('Sair: 0');
  op = Number(window.prompt('Digite sua opção: '));
  if (op == 0) {
    window.alert('ATÉ A PRÓXIMA!');
    break;
  } else if (op == 1) {
    n1 = Number(window.prompt('Digite um valor: '));
    n2 = Number(window.prompt('Digite outro valor: '));
    res = n1 + n2;
    window.alert(res);
  } else if (op == 2) {
    n1 = Number(window.prompt('Digite um valor: '));
    n2 = Number(window.prompt('Digite outro valor: '));
    res = n1 - n2;
    window.alert(res);
  } else if (op == 3) {
    n1 = Number(window.prompt('Digite um valor: '));
    n2 = Number(window.prompt('Digite outro valor: '));
    res = n1 * n2;
    window.alert(res);
  } else if (op == 4) {
    n1 = Number(window.prompt('Digite um valor: '));
    n2 = Number(window.prompt('Digite outro valor: '));
    res = n1 / n2;
    window.alert(res);
  } else {
    window.alert('Digite um valor válido!!!');
  }
  continue;
}
