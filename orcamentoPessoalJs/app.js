class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }
}

class Bd{
    constructor(){
        let id = localStorage.getItem('id')
        if(id == null ){
            localStorage.setItem('id', 0)
        }
    }
    

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return (parseInt(proximoId) + 1)
    }
    
    gravar(despesa){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(despesa))

        localStorage.setItem('id', id)
    }

    recuperarTodosResgistro(){
        // array de despesas
        let despesas = Array()
        
        let id = localStorage.getItem('id')
        for(let i = 1; i <= id; i++){ // recupera todas as despesas cadastradas em localStorege
            //Recupera despesa
            let despesa = JSON.parse(localStorage.getItem(String(i)))

            //trantando índices removidos
            if(despesa === null){
                continue
            }

            despesas.push(despesa)
        }
        return despesas
    }
}

let bd = new Bd()

function cadastrarDespesa(){

   let mes = document.getElementById('mes')
   let dia = document.getElementById('dia')
   let tipo = document.getElementById('tipo')
   let ano = document.getElementById('ano')
   let descricao = document.getElementById('descricao')
   let valor = document.getElementById('valor')

   let despesa = new Despesa(
    ano.value,
    mes.value,
    dia.value,
    tipo.value,
    descricao.value,
    valor.value
   )

   mensagem = new MensagemDialogo()
   if(despesa.validarDados()){
        bd.gravar(despesa)    
        mensagem.sucessoCadastro()
   }else{
        mensagem.falhaCadastro()
   }
}


// Class dialog

class MensagemDialogo{
    constructor(){
        this.titleModal = document.getElementById('exampleModalLabel')
        this.mensagem = document.getElementById('mensagem')
        this.bodyModal = document.getElementById('bodyModal')
        this.buttonModal = document.getElementById('btModal')
    }
    
    sucessoCadastro(){
        this.titleModal.innerHTML = 'Registro inserido com sucesso'
        this.mensagem.innerHTML = 'Sua despesa foi cadastrada com sucesso!'
        this.buttonModal.innerHTML =  'Voltar'
        
        this.bodyModal.className = 'text-success modal-header'
        this.buttonModal.className = 'btn btn-success'
        $('#modalRegistraDespesa').modal('show')
    }

    falhaCadastro(){
        this.titleModal.innerHTML = 'Falha na gravação'
        this.mensagem.innerHTML = 'Por favor preencha todos os dados para efetuar o cadastro!'
        this.buttonModal.innerHTML =  'Voltar e corrigir'


        this.bodyModal.className = 'text-danger modal-header'
        this.buttonModal.className = 'btn btn-danger'
        $('#modalRegistraDespesa').modal('show')
    }
    
}

function carregaListaDespesa(){
    let despesas = Array()
    despesas = bd.recuperarTodosResgistro()
    console.log(despesas)
}