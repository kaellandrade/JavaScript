let inputNome = document.querySelector('#nome');
let btnAdd = document.querySelector('#add');
let btnApagarTodos = document.querySelector('#apagar');
let btnSortear = document.querySelector('#sortear');
let alerta = document.querySelector('#alerta');
let tabela = document.querySelector('#tabela-corpo');
let contagem = document.querySelector('#contagem');

let todosOsAmigos = []; // array onde será armazenado todos os amigos cadastrados; ['Gandalf', 'Bilbo', 'Thorin']
let pares = []; // Pares dos amigos formados exemplo:
/*
[
    ['Gandalf', 'Bilbo'], 
    ['Bilbo, Thorin'], 
    ['Thorin', 'Gandalf']
]
*/


// Limpa a tabela e remove todos os amigos cadastrados;
btnApagarTodos.addEventListener('click', ()=>{
    if(todosOsAmigos.length > 0){ // Verifica se tem amigos para remover
       let resposta =  confirm('Apagar todos amigos cadastrados ?');
       if(resposta == true){
            // Limpa os arrays
            todosOsAmigos = [];
            pares = [];

            contagem.innerHTML = 0;
            tabela.innerHTML = '';
            alerta.className = 'd-none';  // Remove possíveis avisos
            btnSortear.disabled = true; // Desabilita o botão sorteio;
            btnApagarTodos.disabled = true; // Desabilita o botão apagar, uma vez que ja foi apagado tudo;
       }
    }else{
        alerta.className = 'alert alert-primary';
        alerta.innerHTML = 'Adicione amigos primeiro! 🙄';
    }
});

// Adiciona amigos à tabela;
btnAdd.addEventListener('click', addAmigos); // Via click
addEventListener('keydown', enterAdd); // Via Enter

// Função que realiza o sorteio, retornar um array.
btnSortear.addEventListener('click', () => {
    if (todosOsAmigos.length >= 3){
        pares = [] // limpa os pares anteriores caso seja feito outro sorteio
        let copiaAmigos = [...todosOsAmigos]; // Faz uma copia do array principal
    
        copiaAmigos.sort(() => Math.random() - 0.5) // Embaralha o array;
        /*
        Pega o amigo seguinte, ou seja, i+1 para formar pares. 
        O último amigo formará par com o primeiro
    
        Exemplo: ['Sherlock', 'Dracula', 'Scooby']
        Resulta: ('Sherlock', 'Dracula'), ('Dracula', 'Scooby'), ('Scooby', 'Sherlock')
        */
    
        for (let i = 0; i < copiaAmigos.length; i++) {
            if(i != copiaAmigos.length - 1){ // Se fro diferente do último índice, pegue o próximo; 
                pares.push([copiaAmigos[i], copiaAmigos[i+1]])
            }else{ // Caso seja o último elemento, então forme par com o primeiro;
                pares.push([copiaAmigos[i], copiaAmigos[0]])
            }        
        }
    
        pares.sort(() => Math.random() - 0.5); // Embaralha os pares sorteados;
        ExibeOsPares();
    }else{
        alerta.className = 'alert alert-warning';
        alerta.innerHTML = 'Precisamo no mínimo de 3 amigos para brincarmos 😝'
    }
})


function ExibeOsPares() {
    tabela.innerHTML = ''; //Limpa a tabela
    document.querySelector('#amigo_secreto').className = '';
       for (let i = 0; i < pares.length; i++) {    
        let tRow = document.createElement('tr');  
        let divSecreto = document.createElement('div');
        let tdId = document.createElement('td');
        let tdNome1 = document.createElement('td');
        let tdNome2 = document.createElement('td');
        let tdButton = document.createElement('button');

        tdButton.className = 'btn btn-view';
        tdButton.innerHTML = '<i class="far fa-eye"></i>';


        divSecreto.className = 'esconder';
        
        
        
        let amigo1 = pares[i][0];
        let amigo2 = pares[i][1];
        tdId.innerHTML = i+1;
        
        
        tdNome1.innerHTML = capitalize(amigo1);
        divSecreto.innerHTML = capitalize(amigo2);
        
        tdNome2.appendChild(divSecreto);

        tRow.appendChild(tdId);
        tRow.appendChild(tdNome1);
        tRow.appendChild(tdNome2);
        tRow.appendChild(tdButton)
        

        tabela.appendChild(tRow);

        // Mostra o amigo quando o botão click for apertado
        tdButton.addEventListener('mousedown', ()=>{
            divSecreto.className = 'mostrar';
        })
        // Esconde o amigo quando o botão click for solto
        tdButton.addEventListener('mouseup', ()=>{
            divSecreto.className = 'esconder';
        })
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
        alerta.innerHTML = `Ops! ${valor} já está na lista! 🧐`;

    }else if (valor == '') { // verifica se o campo está vazio
        alerta.className = 'alert alert-danger';
        alerta.innerHTML = 'Nome inválido! 🧐';

    }else{
        todosOsAmigos.push(valor);
        // criar os valoes para serem adcionados a tabela;
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdNome = document.createElement('td');
        contagem.innerHTML = todosOsAmigos.length; // atualiza contagem

        tdId.scope = 'row';
        tdId.innerHTML = todosOsAmigos.length;

        tdNome.innerHTML = capitalize(valor);
        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tabela.appendChild(tr);

        // console.log(todosOsAmigos);
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