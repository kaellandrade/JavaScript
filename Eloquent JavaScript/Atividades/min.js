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
    var index = 0;
    var cont = 0;
    while (index <= str.length) {
        if (str.charAt(index) == char) {
            cont ++;
            index ++;

        } else {
            index ++;            
        }
    }
    return cont;
}

console.log(countChar("kakkerlak", "k"));