
/*
   polimorfismo: é uma forma de sobrescerver métodos de classes
   pai, beja abaixo o exemplo.
*/
class Produto{ 
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }
    // método
    verDescricao(){
        console.log(`${this.descricao} por apenas R$ ${this.preco}`)
    }

}

let produto = new Produto('Notebook', 2200)
produto.verDescricao()

//----------------------------------------------------

/*
    this ajusta para o contexto do objeto
    se não usar o this. o interpretador entende que a variável
    é do contexto da função e não da classe propriamente dita.
*/
let produtoLiteral = {
    descricao:'Geladeira',
    preco : 1800,
    verDescricao: function(){
        console.log(`${this.descricao} por apenas R$ ${this.preco}`)
    }
}

produtoLiteral.verDescricao()

/*
    formulário -> servidor
        recupera dados emonta um objeto literal
            onj literal -> JSON -> HTTP -> Server -> Armazena
*/