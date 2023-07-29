Construa um algoritmo no Blockly que declare as seguintes variáveis: nome, idade, altura e maior_de_idade.

Depois, atribua valores para essas variáveis, sabendo que a variável nome é uma string, a variável idade é um inteiro,
a variável altura é um float e a variável maior_de_idade é um booleano.

No final, imprima os valores das variáveis.

-------------------------------------------------------------

# Resolução

![blocklyVariaveis](https://github.com/alvesdanrley/FAP_Softex/assets/129902303/3ac1fc33-3810-485c-9719-4facb272bc3d)

-------------------------------------------------------------

## Em Javascript

```
var nome, altura, idade, maiorDeIdade;


nome = window.prompt('Digite seu nome: ');
altura = Number(window.prompt('Digite sua altura: '));
idade = Number(window.prompt('Digite sua idade: '));
if (idade >= 18) {
  maiorDeIdade = true;
} else {
  maiorDeIdade = false;
}
window.alert(nome);
window.alert(altura);
window.alert(idade);
window.alert(maiorDeIdade)
