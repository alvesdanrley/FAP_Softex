# Desenvolvimento

Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. 
Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

---

# Resolução

![contadorBomba](https://github.com/alvesdanrley/FAP_Softex/assets/129902303/3d3a63a3-da9b-4612-952d-3ca609ede940)

---

## Código em JS

```
var i, contador;

window.alert('INICIANDO CONTAGEM REGRESSIVA');
for (i = 10; i >= 0; i--) {
  contador = String(i) + ' SEGUNDOS PARA DETONAÇÃO!!!';
  window.alert(contador);
}
window.alert('BUM');
