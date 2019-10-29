var listaNomes = [] 

var res = document.getElementById('resposta')

// Função que adiciona números ao array
function addValue() {
    let n = document.querySelector('input#nome')
    let sel = document.getElementById('sel')
    let nome = n.value.trim().toLowerCase() // Deixa o nome em lower e sem espaço no início!
    res.innerHTML = ''
    if(nome.length == 0){
        alert("Nome inválido!")
    }
    else if (listaNomes.indexOf(nome) != -1) { // Se o nome não estiver na lista será retonrado -1
        alert(`${nome} já está na lista!`) 
        
    } else{
        listaNomes.push(nome)
        let item = document.createElement('option')
        item.text =  `${title(nome)}` 
        sel.appendChild(item)
    }
    n.value = '' // Limpado campo
    n.focus() // Deixa o foco em n 
}

function finalizar() {
    if (listaNomes.length != 0) {
        let descricao = `
        Total de nomes cadastrados: ${listaNomes.length}\n`
        res.innerText = descricao
    } else {
        alert("Adicione pessoas antes de finalizar!")
    }
    
}

// limpa a lista
function limpar(){
    resposta = confirm("Deseja apagar todos os amigos cadastrados?");
    if(resposta){
        listaNomes = [];
        sel.innerHTML = ''
        res.innerHTML = ''
    }
    
}

// Funções auxiliares

// Deixa a primeira letra maúscula Ex: Mikael
function title(palavra) {
    name = palavra[0].toUpperCase() + palavra.slice(1).toLowerCase()
    return name
}