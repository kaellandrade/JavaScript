/*
    Retirar valor de dentro de uma estutura array
*/

let frutas = [
    'Abacaxi',
    'Uva',
    'Mamão',
    'Melancia',
    'Laranja',
    'Banana'
]

// Tradicional
let a = frutas[0]
let b = frutas[1]
let c = frutas[2]
console.log(a, b, c)

console.log("\n-------Com a nova feature---------")
let [, , , d, e, f ] = frutas // Pulando os indices 0,1,2
console.log(d, e, f)

console.log ("\n------------parâmetros default--------------------")
let compras = [
    'Feijão',
    'Arroz',
    'Suco',
    'Cerveja'
]

let[g, h, i, j, k = 'Leite'] = compras 
console.log(g, h, i, j, k)

console.log('\n------------Multidimensionais--------------------')

let coisas = [
    [
        'Abacaxi',
        'Uva',
        'Pera',
        'Mamão',
        'Laranja',
        'Banana'
    ],
    [
        'José',
        'Maria'
    ]
]

let [, [nome2,]] = coisas // pegando o valor 'Maria'
console.log(nome2)

let [[, ,nome3]] = coisas // pegando o calor 'Pera'
console.log(nome3)

