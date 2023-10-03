//Criação da superclasse
class Veiculo {
  constructor(modelo, marca, cor) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
  }

  clone() {
    return new Veiculo(this.modelo, this.marca, this.cor)
  }

  displayInfo() {
    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}`);
  }
}

//Instanciação de novos objetos a partir da superclasse
const carro1 = new Veiculo('fox', 'volks', 'vermelho' )
const carro2 = carro1.clone()

carro2.modelo = 'Gol'
carro2.marca = 'volks'
carro2.cor = 'azul'

carro1.displayInfo()
carro2.displayInfo()

//Criação de subclasses
class Moto extends Veiculo {
  constructor (modelo, marca, cor, rodas) {
    super(modelo, marca, cor)
    this.rodas = rodas
  }

  displayInfo(){
    super.displayInfo()
    console.log(`Número de rodas: ${this.rodas}`)
  }
}

class Carro extends Veiculo {
  constructor (modelo, marca, cor, portas) {
    super(modelo, marca, cor)
    this.portas = portas
  }

  displayInfo() {
    super.displayInfo()
    console.log(`Número de portas: ${this.portas}`)
  }
}

//Criando classe para banco de dados dos veículos
class Aplicacao {
  constructor() {
    this.data = []
  }
  
  addMoto(moto) {
    if (moto instanceof Moto) {
      this.data.push(moto)
    } else {
      console.error('Erro: Objeto não é uma instância de Moto')
    }
  }

  addCarro(carro) {
    if (carro instanceof Carro) {
      this.data.push(carro)
    } else {
      console.error('Erro: Objeto não é uma instância de Carro')
    }
  }

  listData() {
    this.data.forEach(item => item.displayInfo())
  }
}

//Instanciando banco de dados
const database = new Aplicacao()

//Instanciando novos veiculos
const novaMoto = new Moto('CB300', 'Honda', 'Vermelha', 2)
const novoCarro = new Carro ('Eclipe', 'Mitsubishi', 'Preto', 4)

//Adicionando ao banco
database.addMoto(novaMoto)
database.addCarro(novoCarro)

//Listando os veiculos
database.listData()
