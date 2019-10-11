var listaValores = [] 

var res = document.getElementById('resposta')
// Função que adiciona números ao array
function addValue() {
    let n = document.querySelector('input#valor')
    let sel = document.getElementById('sel')
    let valor = Number(n.value)
    res.innerHTML = ''
    if (valor > 100 || valor < 1) {
        alert("Valor inválido!")
    } else if (listaValores.indexOf(valor) != -1) { // Se o valor não estiver na lista será retonrado -1
        alert(`${valor} já está na lista!`) 
        
        
    } else{
        listaValores.push(valor)
        let item = document.createElement('option')
        item.text =  `Valor ${valor} adicionado!`
        sel.appendChild(item)
    }
    n.value = '' // Limpado campo
    n.focus() // Deixa o foco em n 
}

function finalizar() {
    if (listaValores.length != 0) {
        let descricao = `
        Total de valores cadastrados: ${listaValores.length}\n
        O maior valor informado: ${Math.max.apply(null, listaValores)}\n
        O menor valor informado: ${Math.min.apply(null, listaValores)}\n
        Soma de todos os valores: ${soma(listaValores)}\n
        Média: ${media(listaValores)}`
        res.innerText = descricao
    } else {
        alert("Adicione valores antes de finalizar!")
    }
    
}

// Funções auxiliares
function soma(array) { // Calcula a soma do array
    if (array.length != 0) {
        let soma = 0
        for (let index in array) {
            soma+= array[index]
        }
        return soma
    } else {
        return 0
    }
}

function media(array) { // Calcula a média
    if (array.length != 0) {
        return soma(array) / array.length
    } else {
        return "Inválida!" // Pois n/0 não está definido
    }
    
}