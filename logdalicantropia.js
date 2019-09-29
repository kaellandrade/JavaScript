var registro = []; // var que irá conter todos os meus objetos registrados

// Função que add valores
function addRegistro(events, trans) {
    registro.push({ // push add elementos
        eventos: events,
        trasnform: trans})
}

function formatStatus(status) {
    if (status == true) {
        return ("Sim!")
    } else {
        return ("Não!")
    }
}

// Função imprime meu registro
function printRegistro(regist) {
    for (var key in regist) { // Percorre o minha lista de objetos
        console.log(`Atividades do ${Number(key)+1}º registro:\n`)

        console.log(`\tTransformação: ${formatStatus(regist[key].trasnform)}`) // Mostra se houve transformção
        for (let index = 0; index < regist[key].eventos.length; index++) { // Percorre os elementos de eventos
            console.log("\t"+regist[key].eventos[index].toUpperCase());
        } 
    }
}


addRegistro(["uva","banana","chocolate","banho"],false)
addRegistro(["laranja","banana","chocolate branco","banho"],false)
addRegistro(["mamão","banana","chocolate branco","banho","uva"],true)
addRegistro(["uva","banana","chocolate","banho"],false)
addRegistro(["laranja","banana","chocolate branco","banho"],false)
addRegistro(["mamão","banana","chocolate branco","banho","uva"],true)
addRegistro(["mamão","banana","chocolate","banho"],false)

printRegistro(registro);