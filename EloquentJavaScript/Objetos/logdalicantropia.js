// O log da licantropia

var registro = []; // var que irá conter todos os meus objetos registrados

// Função que add valores
function addRegistro(squirrel) {
    var entry = {squirrel: squirrel, events: []}
    for (let i = 1; i < arguments.length; i++)
        entry.events.push(arguments[i])
    registro.push(entry)
}

addRegistro(false,"uva","banana","chocolate","banho")

// printRegistro(registro);
console.log(registro)

// Remove o elemento do íncide indicado
function remove(array, index) {
    return array.slice(0,index).concat(array.slice(index+1))
}
// console.log(remove([1,2,3,4,5,6,7],3))

// Deixa a primeira letra maiúscula
function title(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
