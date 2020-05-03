// Todos são filhos de Object.prototype

// Cuidado pois esse atributo será global para aplicação
Object.prototype.attr50 = 'z'

let animal = {
    attr1 : 'a'

}

let vertabrado = {
    __proto__:animal, 
    attr2 : 'b'

}

let ave = {
    __proto__: vertabrado, 
    attr3 : 'c',
    attr2:'x' // sombreamento, pois sobrepõe attr2 de vertebrado
}

console.log(ave.attr2,
    ave.attr1, 
    ave.attr3,
    ave.attr50,
    )