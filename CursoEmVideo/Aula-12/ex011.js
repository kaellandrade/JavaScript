
var agora = new Date();
var hora = agora.getHours(); // Pega a hora atual do sistema

console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 12){
    console.log("Boa dia!")
} else if (hora <= 18) {
    console.log("Boa tarde!")
} else{
    console.log("Boa noite!")
}