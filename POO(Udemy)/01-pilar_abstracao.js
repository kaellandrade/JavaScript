// Conta Bancaria

class ContaBancaria{

    // Iniciando os atributos
    constructor(){
        this.agencia = 340
        this.numeroConta = 12345
        this.saldo = 50
        this.limite = 450
    }

    // Métodos
    depositar(valorDeposito){
        this.saldo += valorDeposito
    }

    sacar(valorSaque){
        this.saldo -= valorSaque
    }

    consultarSaldo(){
        return this.saldo
    }
    mostrarAgencia(){
        return this.agencia
    }
    mostrarNumeroConta(){
        return this.numeroConta
    }

}
//------------------criando uma identidade para o objeto-------------------

console.log(`---------Conta do Kaell --------------`)

let conta_kaell = new ContaBancaria()
console.log(`Saldo: ${conta_kaell.consultarSaldo().toFixed(2)} R$`) // Valor atual da conta
conta_kaell.depositar(500) // depositando 500,00 R$
console.log(`Saldo: ${conta_kaell.consultarSaldo().toFixed(2)} R$`) // Valor depois do depósito

console.log(`---------Conta do Marcos --------------`)
//------------------criando uma identidade para outro objeto-------------------
let conta_marcos = new ContaBancaria()
console.log(`Saldo: ${conta_marcos.consultarSaldo().toFixed(2)} R$`) // Valor pré-saque
conta_marcos.sacar(50) // sacar 50,00 R$
console.log(`Saldo: ${conta_marcos.consultarSaldo().toFixed(2)} R$`) // Valor pós-saque
