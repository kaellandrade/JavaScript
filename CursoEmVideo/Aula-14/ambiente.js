let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem ${num[pos]}`)
    
}
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55')
} else {
console.log(`O valor 8 está na posição ${pos}`)
}
// console.log(`O vetor tem: ${num.length} elementos`)
