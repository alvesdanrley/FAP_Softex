# Instruções do projeto
## Elabore um algoritmo que representa um cadastro. Ele deve ler os seguintes dados fornecidos pelo usuário:

- Nome
- Endereço
- Cidade
- CPF
- RG
- Idade
- Nome do pai
- Nome da mãe
- Peso
- Renda bruta

Apresente as informações solicitadas no final do cadastro.

----------------------------------------

# Resolução

Utilizando as funções de prompt para receber as informações adicionadas pelo usuário, e de adicionar propriedades a um objeto para
que todas as informações fiquem guardadas em apenas uma variável, o algoritmo pode ser expressado da seguinte forma: 

```
const pessoaFisica = new Object()

pessoaFisica.nome = prompt('Nome: ')
pessoaFisica.endereco = prompt('Endereço: ')
pessoaFisica.cidade = prompt('Cidade do indivíduo: ')
pessoaFisica.cpf = Number(prompt('CPF: '))
pessoaFisica.rg = Number(prompt('RG: '))
pessoaFisica.idade = Number(prompt('Idade: '))
pessoaFisica.nomeDoPai = prompt('Nome do Pai: ')
pessoaFisica.nomeDaMae = prompt('Nome da Mãe: ')
pessoaFisica.peso = Number(prompt('Peso: '))
pessoaFisica.rendaBruta = Number(prompt('Renda bruta: '))

console.log(`Informações do cadastrado: Nome ${pessoaFisica.nome};
Endereço: ${pessoaFisica.endereco}; Cidade: ${pessoaFisica.cidade};
CPF: ${pessoaFisica.cpf}; RG: ${pessoaFisica.rg};
Idade: ${pessoaFisica.idade};
Nome do Pai: ${pessoaFisica.nomeDoPai};
Nome da Mãe: ${pessoaFisica.nomeDaMae};
Peso: ${pessoaFisica.peso};
Renda bruta: ${pessoaFisica.rendaBruta}.`)
