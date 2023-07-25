Na tabela em anexo, encontramos dados de 4 jogadores de um game que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram lutar ou não com o chefe.

Baseado nos dados desses jogadores, foram construídas algumas expressões. Avalie cada expressão abaixo, observando as condições de cada jogador, descrito na tabela acima.
Marque com V(Verdadeiro) ou F(Falso) o resultado de cada expressão.

Dica: Lembre-se de substituir as variáveis "pontos", "moedas" e "enfrentou_chefe" pelos valores correspondentes para cada jogador.

-------------------------------------------------------------------
# Resolução

<img src="https://github.com/alvesdanrley/FAP_Softex/assets/129902303/8ad74f74-f743-437d-bf9f-f63e18966663" width=400 />

## Expressões:
( V ) Jogador 1: (120 >= 100) and (15 >= 5) and (Sim == Sim) </br>
( F ) Jogador 2: (99 >= 100) and (200 >= 5) and (Não == Não) </br>
( V ) Jogador 3: (100 < 100) or (5 < 5) or (Sim == Sim) </br>
( V ) Jogador 4: (101 != 100) or (4 != 5) or not(Não == Não) </br>

### Explicação
- Na primeira afirmação, temos a expressão V && V && V, chegando a uma afirmação Verdeira;
- Na segunda, a expressão F && V && V, resultando numa afirmativa Falsa;
- Na terça opção, temos F || F || V, resultando em Verdadeira;
- Por fim, temos V || V || F, tendo como resultante uma afirmação Verdadeira.
