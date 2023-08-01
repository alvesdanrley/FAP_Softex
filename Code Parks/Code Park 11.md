# Desenvolvimento

Desenvolva um código, utilizando o Google Blockly, que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

---

# Resolução

![categoriasHabilitacao](https://github.com/alvesdanrley/FAP_Softex/assets/129902303/116d53fb-ce90-4299-b734-a4eeac1f5178)

---

## Código em JS

```
var veiculo, pessoas, peso;


veiculo = Number(window.prompt('Quantas rodas tem o veículo?'));
if (veiculo == 2 || veiculo == 3) {
  window.alert('Categoria A');
} else {
  pessoas = Number(window.prompt('Quantas pessoas o veículo transporta?'));
}
if (pessoas <= 8) {
  window.alert('Categoria B');
} else if (pessoas > 8) {
  window.alert('Categoria D');
}
peso = Number(window.prompt('Quanto pesa o veículo?'));
if (peso > 3500 && peso <= 6000) {
  window.alert('Categoria C');
} else if (peso > 6000) {
  window.alert('Categoria E');
} else {
  window.alert('Categoria Inexistente');
}

