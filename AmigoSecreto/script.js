let inputNome = document.querySelector('#nome');
let btnAdd = document.querySelector('#add');
let btnApagarTosos = document.querySelector('#apagar');
let btnSortear = document.querySelector('#sortear');
let alerta = document.querySelector('#alerta');
let tabela = document.querySelector('#tabale-nomes');

let todosOsAmigos = []; // array onde será armazenado todos os amigos cadastrados;

// Adiciona amigos à tabela;
btnAdd.addEventListener('click', ()=>{
    let valor = inputNome.value.trim().toLocaleLowerCase(); // Captura o nome do amigo no input

    inputNome.value = '';
    inputNome.focus();
    if(todosOsAmigos.includes(valor)){ // Esse nome já está no array
        alerta.className = 'alert alert-warning';
        alerta.innerHTML = `Ops! ${valor} já está na lista!`;

    }else if (valor == '') { // verifica se o campo está vazio
        alerta.className = 'alert alert-danger';
        alerta.innerHTML = 'Nome inválido!';

    }else{
        todosOsAmigos.push(valor);
        // criar os valoes para serem adcionados a tabela;
        let tr = document.createElement('tr');
        let thId = document.createElement('th');
        let thNome = document.createElement('th');
        document.querySelector('#contagem').innerHTML = todosOsAmigos.length; // atualiza contagem

        thId.scope = 'row';
        thId.innerHTML = todosOsAmigos.length;

        thNome.innerHTML = capitalize(valor);
        tr.appendChild(thId);
        tr.appendChild(thNome);
        tabela.appendChild(tr);

        // console.log(todosOsAmigos);
        alerta.className = 'd-none';
    }
});

function capitalize(nome) { // Nome maiúsculo
    return nome.charAt(0).toUpperCase() + nome.slice(1);
 }

// TODO: Verificar a tabela de amigos se há algum bug

/*
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
*/
