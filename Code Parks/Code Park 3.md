Nome: José Almeida da Silva <br>
CPF: 12345678900 <br>
RG: 9517530 <br>
Altura: 1,78 <br>
Endereço: Rua A, 380 – Centro – Recife/PE

No algoritmo, descreva como será:
1. A proposta das variáveis;
2. Elaborada a declaração das variáveis;
3. Utilizado o comando de atribuição.

-------------------------------------------

# Resolução

Para alocar essas informações em um algoritmo, tomando como base a linguagem Javascript, podemos atribuir as informações a variáveis de algumas formas.


- Atribuindo variável por variável utilizando let para cada uma delas;
```
let nome = 'José Almeida da Silva'
let cpf = 12345678900
let rg = 9517530
let altura = 1.78
let endereço = 'Rua A, 380 - Centro - Recife/PE'
```
- Atribuindo todas as variáveis utilizando o let apenas uma vez;
```
let nome = 'José Almeida da Silva',
cpf = 12345687900,
rg = 9517530,
altura = 1.78,
endereço = 'Rua A, 380 - Centro - Recife/PE'
```
- Criando apenas um objeto e atribuir as informações sugeridas como suas propriedades.
```
let pessoaFísica = {
    nome: 'José Almeida da Silva',
    cpf: 12345687900,
    rg: 9517530,
    altura: 1.78,
    endereço: 'Rua A, 380 - Centro - Recife/PE'
} 
