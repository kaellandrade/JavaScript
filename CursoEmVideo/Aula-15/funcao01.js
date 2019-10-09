//  Verifica se é par ou ímpar

function parimpa(num) {
    if (num % 2 == 0) {
        return `${num} é par!`
    } else {
        return `${num} é ímpar!`
    }
}
var res = parimpa(20)
console.log(res)