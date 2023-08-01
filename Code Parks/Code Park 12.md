# Desenvolvimento

Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. 
Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

---

# Resolução

![contadorBomba](https://github.com/alvesdanrley/FAP_Softex/assets/129902303/32417366-921b-4600-8175-c2bb21354719)

---

## Código em JS

```
var i, contador;

for (i = 10; i >= 0; i--) {
  contador = String(i) + ' SEGUNDOS PARA DETONAÇÃO!!!';
  window.alert(contador);
}
window.alert('BUM');
