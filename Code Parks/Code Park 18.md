# Desenvolvimento

Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, 
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

---

# Resolução

![listaPilhaFila](https://github.com/alvesdanrley/FAP_Softex/assets/129902303/59565629-f5cb-4130-a680-1fe49dfaa4f4)


# Código em JS

```
const array = [3, 7, 9, 1, 0]

function filaRemover() {
    if (array.length > 0) {
        array.shift()
        console.log(`Esses são os números restantes: ${array}`)
        return true
    }
    return false
}

filaRemover()

function listaRemover(elemento) {
    const posiçao = array.indexOf(elemento)
    if (posiçao !== 1) {
        array.splice(posiçao, 1)
        console.log(`Esses são os números restantes: ${array}`)
        return true
    }
    return false
}

listaRemover(3)

function pilhaRemover(){
    if (array.length > 0) {
        array.pop()
        console.log(`Esses são os números restantes: ${array}`)
        return true
    }
    return false
}

pilhaRemover()
