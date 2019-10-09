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

