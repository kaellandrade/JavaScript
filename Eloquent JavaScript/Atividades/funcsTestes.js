// var square = function (x) {
//     return x * x
// }
// // console.log(square(2))

// var makeNoise = function () {
//     console.log("Pling!");
// }

// // makeNoise();

// var power = function (base, exponent) {
//     var result = 1;
//     for (var count = 0; count < exponent; count++) {
//         result *= base;        
//     };
//     return result;
// }
// console.log(power(2,10))

// // ESCOPO
// var x = "outside"

// var f1 = function () {
//     var x = "inside f1"
// }
// f1()
// // console.log(x)

// var f2 = function () {
//     x = "inside f2"
// }
// // f2()
// // console.log(x)

// var something = 1

// {
//     let something = 2
//     console.log(something)

// }

// console.log(something)

// Exemplo de uma função recursiva
function power(base, expoente) {
    if (expoente == 0){
        return 1;
    } else{
        return base * power (base, expoente - 1); // Recursão aqui.
    }
}
// console.log(power(2,1));
function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return  find(start + 5, "(" + history + " + 5)") ||
                    find(start * 3, "(" + history + " * 3)");


    }
    return find(1, "1");
}

// console.log(findSolution(1))

function zeroPad(number, width) {
   var numberString = String(number);
   while (numberString.length < width) {
       numberString = "0" + numberString;
   }
   return numberString;
}

function printFarmIvetory(vacas, porcos, galinhas) {
    console.log(zeroPad(vacas, 3) + " Vacas");
    console.log(zeroPad(porcos, 3) + " Porcos");
    console.log(zeroPad(galinhas, 3) + " Galinhas");


}

printFarmIvetory(7, 11, 3);