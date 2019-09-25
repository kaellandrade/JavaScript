var agora = new Date();

var diaSemana = agora.getDay();
var mes = agora.getMonth();


/*
    DOMINGO -> 0
    SEGUNDA -> 1
    TERÇA   -> 2
    QUARTA  -> 3
    QUINTA  -> 4
    SEXTA   -> 5
    SÁBADO  -> 6
*/

// Dia atual
switch (diaSemana) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5: 
        console.log("Sexta")
        break
    case 6:
        console.log("Sábado")
        break
}

// Mês atual
switch (mes) {
    case 0:
        console.log("Janeiro")
        break
    case 1:
        console.log("Fevereiro")
        break
    case 2:
        console.log("Março")
        break
    case 3:
        console.log("Abril")
        break
    case 4:
        console.log("Maio")
        break
    case 5: 
        console.log("Junho")
        break
    case 6:
        console.log("Julho")
        break
    
    case 7:
        console.log("Agosto")
        break
    case 8:
        console.log("Setembro")
        break
    case 9:
        console.log("Outubro")
        break
    case 10:
        console.log("Novembro")
        break
    case 11:
        console.log("Dezembro")
        break
}