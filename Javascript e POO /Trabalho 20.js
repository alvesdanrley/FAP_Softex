class NumeroComplexo {
    constructor(real, imaginario) {
      this.real = real;
      this.imaginario = imaginario;
    }
  
    // Método para adicionar outro número complexo
    adicionar(outroNumero) {
      this.real += outroNumero.real;
      this.imaginario += outroNumero.imaginario;
    }
  
    // Método para subtrair outro número complexo
    subtrair(outroNumero) {
      this.real -= outroNumero.real;
      this.imaginario -= outroNumero.imaginario;
    }
  
    // Método para multiplicar por outro número complexo
    multiplicar(outroNumero) {
      const novoReal = this.real * outroNumero.real - this.imaginario * outroNumero.imaginario;
      const novoImaginario = this.real * outroNumero.imaginario + this.imaginario * outroNumero.real;
      this.real = novoReal;
      this.imaginario = novoImaginario;
    }
  
    // Método para imprimir o número complexo
    imprimir() {
      console.log(`${this.real} + ${this.imaginario}i`);
    }
  }
  
  // Exemplo de uso
  const numero1 = new NumeroComplexo(3, 4);
  const numero2 = new NumeroComplexo(1, 2);
  
  numero1.adicionar(numero2);
  console.log('Soma:');
  numero1.imprimir();
  
  numero1.subtrair(numero2);
  console.log('Subtração:');
  numero1.imprimir();
  
  numero1.multiplicar(numero2);
  console.log('Multiplicação:');
  numero1.imprimir();
  
