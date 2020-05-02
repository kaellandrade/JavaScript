
/*
   polimorfismo: é uma forma de sobrescerver métodos de classes
   pai, beja abaixo o exemplo.
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

class Avestruz extends Passaro{
    constructor(){
        super('grande', 'Branco e Preto', 250, 15000)

    }
    enterrarCabeca(){
        console.log('Enterrar a cabeça!')
    }

    voar(){
        console.log('Não sabe voar!')
    }
}



let papagaio = new Papagaio('medio', true, 'Verde', 25, 350)
let avestruz = new Avestruz()

papagaio.voar()
avestruz.enterrarCabeca()
avestruz.voar()

