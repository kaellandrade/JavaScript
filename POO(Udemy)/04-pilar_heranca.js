class Animal{ 
    constructor(){
        this.visao_noturna = null
        this.peso = null
        this.cor = ''
        this.tamanho = null
    }

    dormir(){
        console.log('Dormir')
    }
}

class Cachorro extends Animal{ 
    constructor(){
        super() // ?
        this.orelhas = 'Grandes e caídas'
    }

    correr(){
        console.log('Correr')
    }

    rosnar(){
        console.log('Rosnar')
    }
}

class Passaro extends Animal{ 
    constructor(){
        super() // ? 
        this.bico = 'Curto'
    }

    voar(){
        console.log('Voar')
    }

    
}

class Papagaio extends Passaro{ 
    constructor(){
        super()
        this.sabeFalar = true
    }

    falar(){
        console.log('Falar')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

console.log(cachorro)
console.log(passaro)
console.log(papagaio)