class SFA {
  cost() {
    return 4.50
  }
}

class SFADecorator {
  constructor(sandwich) {
    this._sandwich = sandwich;
  }

  cost() {
    return this._sandwich.cost();
  }
}

class CheeseDecorator extends SFADecorator {
  constructor(sandwich) {
    super(sandwich);
  }

  cost() {
    return super.cost() + 2; // Adiciona o custo do queijo
  }
}

class PepDecorator extends SFADecorator {
  constructor(sandwich) {
    super(sandwich);
  }

  cost() {
    return super.cost() + 0.99; // Adiciona o custo do Pepperoni
  }
}

const sandubaSimples = new SFA()
const sandubaCompleto = new PepDecorator(new CheeseDecorator(sandubaSimples))

console.log("Custo do sanduíche de frango assado com queijo ralado e pepperoni fica: $" + sandubaCompleto.cost());
