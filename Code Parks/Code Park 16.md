# Desenvolvimento

Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

---

# Resolução

![ex1Arrays](https://github.com/alvesdanrley/FAP_Softex/assets/129902303/68b9f9ec-757f-4990-aa43-79ee06cfc991)

---

# Código

```
let nomes = ['João1','Arnaldo1','João2','Arnaldo2','João3','Arnaldo3','João4','Arnaldo4','João5','Arnaldo5']

let idades = [15, 30, 20, 35, 25, 40, 30, 45, 35, 50]

let cores = ['azul', 'vermelho', 'amarelo','azul', 'vermelho', 'amarelo','azul', 'vermelho', 'amarelo', 'azul']

//Imprimindo a lista original
console.log(nomes)
console.log(idades)
console.log(cores)

//Realizando as modificações
idades[9] = 69
cores[9] = 'roxo'

//Imprimindo modificado
console.log(nomes)
console.log(idades)
console.log(cores)
