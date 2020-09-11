let inputNome = document.querySelector('#nome');
let btnAdd = document.querySelector('#add');
let btnApagarTodos = document.querySelector('#apagar');
let btnSortear = document.querySelector('#sortear');
let alerta = document.querySelector('#alerta');
let tabela = document.querySelector('#tabela-corpo');
// let tabelaHead = document.querySelector('#tabela-cabecalho tr');
let contagem = document.querySelector('#contagem');

let todosOsAmigos = []; // array onde será armazenado todos os amigos cadastrados;
let pares = []; // pares dos amigos formados



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

// TODO : Ajustar o sorteio.
btnSortear.addEventListener('click', () => {
    // Sorteia os amigos
    pares = [] // limpa pares caso seja feito outro sorteio
    let copiaAmigos = [...todosOsAmigos];
    copiaAmigos.sort(() => Math.random() - 0.5)
    
    for (let i = 0; i < copiaAmigos.length; i++) {
        if(i != copiaAmigos.length - 1){
            pares.push([copiaAmigos[i], copiaAmigos[i+1]])
        }else{
            pares.push([copiaAmigos[i], copiaAmigos[0]])
        }
        
    }
    console.table(pares)
    ExibeOsPares();
    // return pares;
})


function ExibeOsPares() { // TODO: Fazer alguns ajustes;
    tabela.innerHTML = '';
    for (let i = 0; i < pares.length; i++) {    
        let tRow = document.createElement('tr');  
        let thId = document.createElement('th');
        let thNome1 = document.createElement('th');
        let thNome2 = document.createElement('th');
        

        let amigo1 = pares[i][0];
        let amigo2 = pares[i][1]

        thId.innerHTML = i+1;



        thNome2.innerHTML = capitalize(amigo1);
        thNome1.innerHTML = capitalize(amigo2);

        tRow.appendChild(thId);
        tRow.appendChild(thNome1);
        tRow.appendChild(thNome2);


        tabela.appendChild(tRow);
    }


 }

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