let inputNome = document.querySelector('#nome');
let btnAdd = document.querySelector('#add');
let btnApagarTodos = document.querySelector('#apagar');
let btnSortear = document.querySelector('#sortear');
let alerta = document.querySelector('#alerta');
let tabela = document.querySelector('#tabala-nomes');
let contagem = document.querySelector('#contagem');

let todosOsAmigos = []; // array onde será armazenado todos os amigos cadastrados;
let amigosJaSorteados = []; // armazena os amigos já sorteados
let pares_amigos = []; // pares dos amigos formados



// !Remove todos os dados da tabela e o array também
btnApagarTodos.addEventListener('click', ()=>{
    if(todosOsAmigos.length > 0){
       let resposta =  confirm('Apagar todos amigos cadastrados ?');
       if(resposta == true){
            // Limpa os arrays
            todosOsAmigos = [];
            amigosJaSorteados = [];
            pares_amigos = [];

            contagem.innerHTML = 0;
            tabela.innerHTML = '';
            alerta.className = 'd-none';  //remove possiveis avisos
            btnSortear.disabled = true; // desabilita o botão sorteio;
            btnApagarTodos.disabled = true; // desabilita o botão apagar;

        //    console.log(todosOsAmigos);
       }
    }
});

// Adiciona amigos à tabela;
btnAdd.addEventListener('click', addAmigos);
addEventListener('keydown', enterAdd);

// TODO : Ajustar o sorteio apenas para 3 pessoas ou mais.
btnSortear.addEventListener('click', ()=>{
    formarOsAmigos();
    console.log(pares_amigos);
    // Limpa as variáveis para tentar um novo sorteio
    amigosJaSorteados = [];
    pares_amigos = [];
})

function capitalize(nome) { // Nome maiúsculo
    return nome.charAt(0).toUpperCase() + nome.slice(1);
}

function addAmigos(){
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
        contagem.innerHTML = todosOsAmigos.length; // atualiza contagem

        thId.scope = 'row';
        thId.innerHTML = todosOsAmigos.length;

        thNome.innerHTML = capitalize(valor);
        tr.appendChild(thId);
        tr.appendChild(thNome);
        tabela.appendChild(tr);

        console.log(todosOsAmigos);
        if(todosOsAmigos.length != 0){ // habilita botão remover
            btnApagarTodos.disabled = false;
        }
        if(todosOsAmigos.length >= 3){ // habilita botão sortear
            btnSortear.disabled = false;
        }
        alerta.className = 'd-none';  //remove possiveis avisos
    }
}

// Controle da aplicação
function enterAdd(e) {
    if(e.keyCode == 13){ // enter para adicionar
        addAmigos();
    }else if(e.keyCode == 27 && document.activeElement == inputNome){ // Esc para limpar campo nome
        inputNome.value = '';
    }
 }


 // Script 
function formarOsAmigos() { 
    todosOsAmigos.forEach((item) => {
        pares_amigos.push([item, sortearAmigo(item)]);
    })
 }


function sortearAmigo(amigo){
    do {
        var numSorteado = Math.floor(Math.random() * todosOsAmigos.length);
        var amigoSorteado = todosOsAmigos[numSorteado];

    } while (todosOsAmigos[numSorteado] == amigo || amigosJaSorteados.includes(numSorteado));
    amigosJaSorteados.push(numSorteado); // guarda o número sorteado
    return amigoSorteado;
    
}

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
