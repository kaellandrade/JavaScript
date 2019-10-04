// Somando intervalos
function range(start, end, inc) {
    let incre = Math.abs(inc) // Torna o inc positivo caso passe valores como range(5,1,-1)
    let array = []
    if (arguments.length < 3) { // Verifica se foram passado 3 argumentos
        if (start > end) {
            for (let i = start; i >= end; i--) // Desencrementa em -1
                array.push(i)
            
        } else {
            for (let i = start; i <= end; i++)  // Incrementa em 1
                array.push(i)
        }
        
        
    } else {
        if (start > end) {
            for(let i = start; i >= end; i-=incre)
            array.push(i)
        } else{
            for (let i = start; i <= end; i += incre) // Incrementa em incre
                array.push(i) 
        }  
    }
    
    return array
}

function sum(array) {
    soma = 0
    for (let i in array) {
        soma += array[i]
    }
    return soma
}

// console.log(sum(range(10,1,-2)))
// console.log(range(1,10,1))

// Invertando um array
function reverseArray (array) {
    let newarray = []
    for (let i in array) {
        newarray.unshift(array[i]) // ushift add o elemento no final
    }
    return newarray
}
// lista = ["A","B","C"]
// console.log(reverseArray(lista))
// console.log(lista)

var list = {
    value:1,
    rest:{
        value:2,
        rest:{
            value:3,
            rest : null
        }
    }
}
// console.log(list)

function arrayToList(array) {
    var list = null
    for (let c = array.length - 1; c >= 0; c--) 
        list = {value:array[c], rest:list}
    return list
    
}

function listToArray(list) {
    var lista = []
    for (let node = list; node; node = node.rest)
        lista.push(node.value)
    return lista
}

console.log(arrayToList([1,2,3,,4,5,6,7]))