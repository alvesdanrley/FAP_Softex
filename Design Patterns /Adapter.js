// Interface Galinha
class Galinha {
  bicar() {
    console.log("Galinha bicando!");
  }

  cacarejar() {
    console.log("Cacarejo da Galinha!");
  }
}

// Classe Pato
class Pato {
  grasnar() {
    console.log("Pato grasnando!");
  }

  voar() {
    console.log("Pato voando!");
  }
}

// Adaptador para transformar Pato em Galinha
class AdaptadorPato extends Galinha {
  constructor(pato) {
    super();
    this.pato = pato;
  }

  bicar() {
    this.pato.grasnar(); // Pato "grasna" ao bicar
  }

  cacarejar() {
    this.pato.voar(); // Pato "voa" ao cacarejar
  }
}

// Classe de demonstração do AdaptadorPato
class AdaptadorPatoDemo {
  static main() {
    const pato = new Pato();
    const adaptadorPato = new AdaptadorPato(pato);

    console.log("Usando o Pato como se fosse uma Galinha:");
    adaptadorPato.bicar(); // Pato "grasna" ao bicar, adaptado como Galinha
    adaptadorPato.cacarejar(); // Pato "voa" ao cacarejar, adaptado como Galinha
  }
}

// Executar a demonstração
AdaptadorPatoDemo.main();
