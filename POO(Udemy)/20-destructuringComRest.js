// array
let arr = [10, 20, 30, 40, 50]

let [ inicio, ...resto ] = arr

console.log(inicio, resto) // 10 [ 20, 30, 40, 50]

// objeto

let obj = {
    a:100,
    b:200,
    c:300,
    d:400
}

let { a, ...z} = obj

console.log(a, z) //100 { b: 200, c: 300, d: 400 }