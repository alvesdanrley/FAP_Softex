No hipertexto anterior, temos um exemplo de um fluxograma que realiza o cálculo da média de duas notas de um aluno. 
O fluxograma solicita duas notas que serão somadas, e logo em seguida a média dessas notas é calculada. Dessa forma o resultado da média quando é maior ou igual a 7 o aluno está APROVADO,
quando menor que 7 o aluno está REPROVADO.

Utilizando o Google Blockly construa o algoritmos que realiza esse processamento.

--------------------------------------------

# Resolução

![MEDIA](https://github.com/alvesdanrley/FAP_Softex/assets/129902303/f1785371-d529-4ed3-a107-b1f135ca887c)

---------------------------------------------

## Conversão para JS

```
var n1, n2, media;

n1 = Number(window.prompt('Digite a primeira nota: '));
n2 = Number(window.prompt('Digite a primeira nota: '));
media = (n1 + n2) / 2;

if (media < 7) {
  window.alert('REPROVADO');
}
if (media > 7) {
  window.alert('APROVADO');
}
