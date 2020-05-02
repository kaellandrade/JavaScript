// Uma função construtora tem o papel de definição da classe
// do objeto que queremos criar
let Carro = function(){
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180
    
    this.acelerar = () => {
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = () => this.velocidadeAtual

    this.setVelocidadeAtual = (valocidadeAtual) => this.velocidadeAtual = valocidadeAtual

}

let carro = new Carro()

console.log(`A velocidade atual é ${carro.getVelocidadeAtual()}`)
carro.acelerar()
carro.acelerar()
console.log(`A velocidade atual é ${carro.getVelocidadeAtual()}`)
