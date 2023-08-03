# Desenvolvimento

Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.

---

# Resolução

![ex2Arrays](https://github.com/alvesdanrley/FAP_Softex/assets/129902303/d2bdc8d1-5f20-4202-881e-9dd8fe74febe)

---

# Código

```
const animals = [
    ['Jorge', 'Leão', 12 ],
    ['Lucas', 'Macaco', 24],
    ['Fernando', 'Galinha', 54]
]

animals.forEach(row => {
    row.forEach(element => {
        console.log(element)
    })
})
