Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas,
qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- Trator; 
- Moto;
- Bicicleta.

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.

-------------------------------------

# Resolução

```
var q1 = prompt('É um transporte terrestre? ')
if (q1 == 'Sim') {
    var q2 = prompt('Usa capacete? ' )
} else if (q1 && q2 == 'Sim') {
    console.log('É uma moto')
} else {
    if (q1 == 'Sim' && q2 == 'Nao') {
        var q3 = prompt('Cabe apenas 1 pessoa? ')
    } else if (q2 == 'Nao' && q3 == 'Sim') {
        var q4 = prompt('Tem pedal?')
    } else if (q4 == 'Sim') {
        console.log('É uma bicicleta')
    } else {
        if (q3 == 'Nao') {
            var q5 = prompt('É pesado? ')
        } else if (q5 == 'Sim') {
            console.log('É um trator!')
        } else {
            console.log('Certamente é um meio de transporte!')
        }
    }
}
