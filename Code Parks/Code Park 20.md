# Desenvolvimento
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.
Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.
Codifique a solução mais eficiente para buscar o número 20 no array.

---

# Resolução

```
function encontrarValor(array, valorDesejado) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === valorDesejado) {
      return i
    } 
  }
  return -1
}



const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
const valorDesejado = 20

const indiceEncontrado = encontrarValor(array, valorDesejado)

if (indiceEncontrado !== -1) {
  console.log(`O valor ${valorDesejado} foi encontrado no índice ${indiceEncontrado}!`)
} else {
  console.log('Valor não encontrado')
}
