function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var hour = window.document.getElementById('hora');

    var data = new Date()
    var hora = data.getHours()
    var horacompleta = data.toLocaleTimeString()

    hour.innerHTML = horacompleta;

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = 'Bom dia!'
        img.src = "../bancoDeImagens/manha.png"
        document.body.style.background = '#d8a557'

    } else if (hora >= 12 && hora <= 18){
        msg.innerHTML = 'Boa tarde!'
        img.src = "../bancoDeImagens/tarde.png"
        document.body.style.background = '#fd9542'

    } else{
        msg.innerHTML = 'Boa noite!'
        img.src = "../bancoDeImagens/noite.png"
        document.body.style.background = '#383836'
    }
}