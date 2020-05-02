let Bicicleta1 = {
    cor:'Branca',
    marcha:'única',
    aro:12,
    pedalar(){
        console.log('Método pedalar executado!')
    }
}

let Bicicleta2 = {
    cor:'Vermelha',
    marcha:'18',
    aro:26,
    pedalar(){
        console.log('Método pedalar executado!')
    }
}

console.log(Bicicleta1)
console.log(Bicicleta2)

// ----------------------------------------
let BicicletaFactory = function(cor, marcha, aro){
    return{ // retorna um objeto
        cor,
        marcha,
        aro,
        pedalar(){
            console.log('Método pedalar executado!')
        }
    }
      
}

let Bicicleta3 = BicicletaFactory("Verde",'18',26)
let Bicicleta4 = BicicletaFactory("Azul",'única',18)

console.log(`Cor: ${Bicicleta3.cor}`)
console.log(`Cor: ${Bicicleta4.cor}`)

console.log(Bicicleta3.pedalar())
console.log(Bicicleta4.pedalar())
