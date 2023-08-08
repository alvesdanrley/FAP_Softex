# Desenvolvimento

Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, 
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

---

# Resolução

## Na lista
O item a ser removido vai de acordo com a necessidade ou escolha de quem a está manejando, tendo controle apenas da quantidade de
elementos presentes nela. Em uma função, atentaríamos para os índices de 0 a 4 para remoção dos elementos, sem ordem definida.

## Na pilha
Utiliza-se o padrão LIFO (Last in-First out), ou seja, o último elemento a entrar é o primeiro a sair. Em ordem seriam removidos
0, 1, 9, 7 e 3 por último.

## Na fila
Ocorre o inverso da pilha, em que o padrão é o FIFO (First in-First out), quando o primeiro a entrar é o primeiro a sair. E na ordem
também seria inverso da pilha: 3, 7, 9, 1 e 0.
