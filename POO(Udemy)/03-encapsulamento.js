/*
O ENCAPSULAMENTO permite criar atributos e métodos privados.
Porém, no ES6 não temos palavras reservadas para tal finalidade como
'private' 'public', por isso foi adotado uma convenção, atributos privados
começam com _ (underscore).
*/
class TV{
    constructor(){

        this.relacaoCanais = Array(2,4,5,7,10)
        this._canalAtivo = 5 // _ significa que esse atributo é privado
        this._volume = 5
    }

    // getters e setters
    get canalAtivo(){
        return this._canalAtivo
    }

    set canalAtivo(canal){
        // Vamos setar o canal caso ele exita no array
        if(this.relacaoCanais.indexOf(canal)!= -1){
            this._canalAtivo = canal
        }
    }
}

// instanciando a classe
let tv = new TV()

tv.canalAtivo = 7 // Procura pelo método set
console.log(tv.canalAtivo) // Procura pelo método get

/*

*/
