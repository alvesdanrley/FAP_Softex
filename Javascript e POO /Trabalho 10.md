```
class Banco {
    constructor(conta, saldo){
        this.conta = conta
        this.saldo = saldo
    }
    numeroConta = function() {
        return `Número da conta: ${this.conta}.`
    }
    consultarSaldo = function() {
       return `Seu saldo é de ${this.saldo}`
    }
    fazerDeposito = function(deposito) {
        let saldoFinal = this.saldo + deposito
        return saldoFinal
    }
    fazerSaque = function(saque) {
        let saldoFinal = this.saldo - saque
        return saldoFinal
    }
}

const minhaConta = new Banco(2345, 3500)

console.log(minhaConta.numeroConta())
console.log(minhaConta.consultarSaldo())

console.log (`Após o depósito seu saldo final é de ${minhaConta.fazerDeposito(3500)}`)
console.log (`Após o saque, seu saldo final é de ${minhaConta.fazerSaque(1500)}`)
