/*
    Criamos as variaveis abaixo pois precisamos de certa forma manipular 
    os elementos HTML que inserimos no arquivo index.html
*/
var inputElement = document.getElementById('ipt');
var listElement = document.getElementById('ul');

/*
    A função addItem() cria os itens nossa lista, pegando o valor que foi digitado
    no campo de texto e adiciona como um novo item da lista
*/

function addItem() {
    let getText = inputElement.value;
    let liElement = document.createElement('li');
    
    // Só adciona se o campo não esetiver vazio.
    if (getText.length > 0) {
        let textItem = document.createTextNode(getText);
        listElement.appendChild(liElement);
        liElement.appendChild(textItem);
    } else {
        alert("Digite algo...")
    }

}

/*
    Ao clicar no botão adicionar a função addItem() é chamada para 
    criar um novo item em tela, e em seguida limpamos o campo para
    digitarmos um novo item a ser inserido.
*/

function lancar(){
    addItem();
    inputElement.value = '';

}