var listaNomes = [] 

var res = document.getElementById('resposta')
var n = document.querySelector('input#nome')
var sel = document.getElementById('mylist')

// Função que adiciona nomes ao array
function sortearAmigo() {
    if(listaNomes.length > 0){
        var amigo = random(listaNomes)
        res.innerHTML = amigo.toUpperCase()
        let item = sel.getElementsByTagName('li');
        sel.removeChild(item[listaNomes.indexOf(amigo)]) // AQUI!
        removepessoa(listaNomes, amigo);

    } else{
        alert("Adicione amigos primeiro!")
    }
    
}

function addValue() {
    
    let nome = n.value.trim().toLowerCase() // Deixa o nome em lower e sem espaço no início!
    res.innerHTML = ''
    if(nome.length == 0){
        alert("Nome inválido!")
    }
    else if (listaNomes.indexOf(nome) != -1) { // Se o nome não estiver na lista será retonrado -1
        alert(`${nome} já está na lista!`) 
        
    } else{
        listaNomes.push(nome)
        let node = document.createElement('li')
        var textnode = document.createTextNode(`${title(nome)}`) 
        node.appendChild(textnode)
        document.getElementById("mylist").appendChild(node)
    }
    n.value = '' // Limpado campo
    n.focus() // Deixa o foco em n 
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

// Deixa a primeira letra maúscula Ex: Mikael
function title(palavra) {
    name = palavra[0].toUpperCase() + palavra.slice(1).toLowerCase()
    return name
}

function random(array){
    var item = array[Math.floor(Math.random() * array.length)]
    return item
}

// Remove um lemento
function removepessoa(array, name) {
    var index = array.indexOf(name);
    if (index > -1){
        var name = array.splice(index, 1)
    }
    return name[0]
}

