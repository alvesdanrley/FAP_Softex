// Classe base
class Computer {
  constructor(ram, hdd, cpu, tipo) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.tipo = tipo;
  }

  toString() {
    console.log(`RAM: ${this.ram} | HDD: ${this.hdd} | CPU: ${this.cpu} | Tipo: ${this.tipo}`);
  }
}

// Subclasses
class Server extends Computer {
  type() {
    super.toString
  }
}

class PC extends Computer {
  type() {
    super.toString
  }
}

// Factory Method
function createComputer(type) {
  switch (type) {
    case 'PC':
      return new PC

    case 'Servidor':
      return new Server

    default:
      console.error('Erro: Opção inválida')
  }
}

//Instanciando um novo objeto
const pc1 = createComputer('PC')

pc1.ram = 3600
pc1.hdd = 10000
pc1.cpu = 4.8
pc1.tipo = 'Pessoal'

pc1.toString()
