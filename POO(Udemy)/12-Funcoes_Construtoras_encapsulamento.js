// Uma função construtora tem o papel de definição da classe
// do objeto que queremos criar
let Carro = function(){
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180
    
    this.acelerar = () => {
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > this.velocidadeMaxima){
            velocidade = this.velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = () => this.velocidadeAtual

    this.setVelocidadeAtual = (valocidadeAtual) => this.velocidadeAtual = valocidadeAtual

}

let carro = new Carro()

console.log(`A velocidade atual é ${carro.getVelocidadeAtual()}`)
carro.velocidadeMaxima = 300
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
console.log(`A velocidade atual é ${carro.getVelocidadeAtual()}`)

//------------------------------------------------

let Carro2 = function(){

    var velocidadeMaxima = 180
    var quilometrosRodados = 0


    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    
    this.acelerar = () => {
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > velocidadeMaxima){
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
        
        setQuilometrosRodados(0.07)
        console.log(quilometrosRodados)
    }

    this.getVelocidadeAtual = () => this.velocidadeAtual

    this.setVelocidadeAtual = (valocidadeAtual) => this.velocidadeAtual = valocidadeAtual
    
    var setQuilometrosRodados = function(q){
        quilometrosRodados += q
    }
}

let carro2 = new Carro2()

console.log(`A velocidade atual é ${carro2.getVelocidadeAtual()}`)
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
console.log(`A velocidade atual é ${carro2.getVelocidadeAtual()}`)

console.log(carro)

console.log(carro2)
