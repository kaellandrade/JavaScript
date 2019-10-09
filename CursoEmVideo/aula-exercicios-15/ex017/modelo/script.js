var listaValores = [] 

var res = document.getElementById('resposta')
// Função que adiciona números ao array
function addValue() {
    let n = document.querySelector('input#valor')
    let sel = document.getElementById('sel')
    let valor = Number(n.value)

    res.innerText = '' // Limpa o campo 
    if (valor > 100 || valor < 1) {
        alert("Valor inválido!")
        n.value = '' // Limpado campo
    } else if (listaValores.indexOf(valor) != -1) { // Se o valor não estiver na lista será retonrado -1
        alert(`${valor} já está na lista!`) 
        n.value = '' // Limpado campo
        
    } else{
        listaValores.push(valor)
        let option = document.createElement('option')
        option.text =  `Valor ${valor} adicionado!`
        sel.add(option)
        n.value = ''  // Limpado campo
    }
}

function finalizar() {
    if (listaValores.length != 0) {
        let descricao = `
        Temos ${listaValores.length} cadastrados\n
        O maior valor informado foi: ${Math.max.apply(null, listaValores)}\n
        O menor valor informado foi: ${Math.min.apply(null, listaValores)}\n
        Somando todos os valores temos: ${soma(listaValores)}\n
        A média dos valores digitados é: ${media(listaValores)}`
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