// Usando arrow function
var listinha = [1,2,3,4,5,6,7,8,9,10]

// console.log(listinha.filter(par => (par % 2 == 0)))

var geradosPares = []
var geradosImpares = []

function gerar(listn, intervalo) {
    for (let i = 0; i < listn; i++) {
        let gerador =(Math.floor(Math.random() * intervalo))
        if (gerador % 2 == 0) {
            geradosPares.push(gerador)
        } else {
            geradosImpares.push(gerador)            
        }
    }
}
console.log(gerar(25,200))
console.log(`Lista dos impares gerados ${geradosImpares}`)
console.log(`Lista dos pares gerados ${geradosPares}`)
