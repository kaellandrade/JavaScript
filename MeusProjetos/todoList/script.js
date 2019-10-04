var todoList = [];

// Adiciona tarefas ao final da lista
function rememberTo(task) {
    todoList.push(task)
}

// Retira a primeira tarefa da lista 
function whatisNext() {
    return todoList.shift()
}

// Adiciona tarefas no início da lista
function urgentlyRememberTo(task) {
    todoList.unshift(task)   
}

rememberTo("Cortar o cabelo")
rememberTo("Estudar Mat")
rememberTo("Passear com cão")
urgentlyRememberTo("Pagar internet")
console.log(todoList)
whatisNext()
console.log(todoList.indexOf(1))
