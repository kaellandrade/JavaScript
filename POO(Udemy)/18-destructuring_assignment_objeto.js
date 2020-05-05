/*
    Retirar valor de dentro de uma estutura objeto
*/

// composição
let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante:'abc',
        modelo: 'xyz'
    }
}

// let { descricao, preco } = produto
// ou 
// let { descricao: d, preco: p} = produto
// console.log(d, p )

let {detalhes: {fabricante, modelo}} = produto
console.log(fabricante, modelo)