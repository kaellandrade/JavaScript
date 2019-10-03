var campoinicio = document.getElementById("txtinicio")
var campofim = document.getElementById("txtfim")
var campopasso = document.getElementById("txtpasso")
var res = document.getElementById("res")



function contar(){
    let inicio = campoinicio.value
    let fim = campofim.value
    let passo = campopasso.value

    if (inicio.length == 0|fim.length==0|passo.length==0) {
        alert("Ops, campos inválidos!")
        campoinicio.value = ''
        campofim.value = ''
        campopasso.value = ''
        res.innerHTML = ''

    } else {
        res.innerHTML = 'Contando: <br>'
        var inicioN = Number(inicio)
        var fimN = Number(fim)
        var passoN = Number(passo)
    }
    if (passoN <= 0) {
        passoN = 1;
    }
    
    if ( inicioN < fimN) {
        // Contagem crescente
        
        for (let contador = inicioN; contador <= fimN; contador+=passoN) {
            res.innerHTML += ` ${contador} \u{1F449}`            
        }

    } else{
        // Contagem resgressiva
        for (let contador = inicioN; contador >= fimN; contador-=passoN) {
            res.innerHTML += ` ${contador} \u{1F449}`                        
        }
    }
    res.innerHTML += `\u{1F3C1}`  
     
}