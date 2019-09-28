/*
Escreva uma função min que recebe dois argumentos e retorna o menor deles.
*/

function menor(x, y) {
    if (x <= y) {
        return x;
    } else {
        return y;
    }
}
// console.log(menor(0, -10))

// É par usando recursão
// positivo = Math.abs
function isEven(n) {

    if (n  == 0) {
        return true; 
    } else if ( n == 1 ){
        return false;
    } else if (n > 0){
        return isEven(n-2)
    } else{
        return isEven(-n);
    }
}
// console.log(isEven(-1))

//Função que conta quantos char há na string.
function countChar(str, char) {
    var cont = 0;
    for (let index = 0; index <= str.length; index++) {
        if (str.charAt(index) == char) {
            cont ++;            
        }
    }
    return cont;
}

console.log(countChar("kakkerlak", "k"));