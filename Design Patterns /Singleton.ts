class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "SenhaSuperSecreta123";

  private constructor() {}

  public static getInstance(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta. Bem-vindo, agente secreto!");
    } else {
      console.log("Acesso negado. Senha incorreta. Intruso detectado!");
    }
  }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Tentativa de acesso com senha correta
sistemaSeguranca.acessarBaseSecreta("SenhaSuperSecreta123");

// Tentativa de acesso com senha incorreta
sistemaSeguranca.acessarBaseSecreta("SenhaIncorreta456");
