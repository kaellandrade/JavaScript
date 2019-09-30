function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Ano atual 20XX

    var formAno = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    
    if (formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - Number(formAno.value)
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(fsex[0].checked){
            var genero = "Homem"

            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','../bancoDeImagens/menino.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src','../bancoDeImagens/adolescente-menino.png')

            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','../bancoDeImagens/homem.png')
            } else{
                // Idoso
                img.setAttribute('src','../bancoDeImagens/homem-idoso.png')

            }

        } else{
            var genero = "Mulher"

            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','../bancoDeImagens/menina.png')

            } else if (idade < 21){
                // Jovem
                img.setAttribute('src','../bancoDeImagens/adolescente-menina.png')

            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','../bancoDeImagens/mulher.png')

            } else{
                // Idoso
                img.setAttribute('src','../bancoDeImagens/mulher-idoso.png')

            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}