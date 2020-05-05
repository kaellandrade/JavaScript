// array

let arr = [10, 20, 30, 40]
console.log("\n_____Com arrays_______")

function teste([ a, b, , c, d = 100]){ // destructuring
    console.log(a,b,c,d)
}

teste(arr)

//array
console.log("\n_____Com Objetos_______")
let obj = {
    a:100,
    b:200,
    c:300,
    d:400
}

function testeObj({a:valor1, b:valor2, d, z=700}){ // destructuring extrai o atributo desejado
    console.log(valor1,valor2, d, z)
}

testeObj(obj)