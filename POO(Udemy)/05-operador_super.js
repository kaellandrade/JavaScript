
/*
    super() é necessário quando uma classe estende de outra.
    O super() fornece acesso ao construtor da classe pai
*/
class Animal{ 
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir(){
        console.log('Dormir')
    }
}

class Passaro extends Animal{ 
    constructor(bico, cor, tamanho, peso){
        super(cor, tamanho, peso) // ? 
        this.bico = bico
    }

    voar(){
        console.log('Voar')
    }

    
}

class Papagaio extends Passaro{ 
    constructor(bico, sabeFalar, cor, tamanho, peso){
        super(bico, cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    falar(){
        console.log('Falar')
    }
}

let papagaio = new Papagaio('medio',true, 'Verde', 25, 350)
let papagaio2 = new Papagaio('pequeno',false, 'Azul', 10, 80)

console.log(papagaio)
console.log(papagaio2)
