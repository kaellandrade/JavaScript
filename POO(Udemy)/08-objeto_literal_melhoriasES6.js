let nome = 'Mikael'
let idade = 24
let sexo = 'Masculino'
let profissao = 'Estudante'

let objeto = {
    nome: nome, // key = nome variável / valor = valor da variável
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function(){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

objeto.exibirResumo()

// com a nova feature do ES6 fica assim
let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo(){ // nova forma de declarar função/método
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao} (ES6)`)
    }
}
objeto2.exibirResumo()
