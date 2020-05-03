/*
Operadores de Spread(Espelhar) e  Rest(Juntar)
*/

//------------------- Usando spread em listas simples-----------------
console.log('───────────────Usando spread em listas simples────────────────────')
cursosTI = [
    'Introdução GNU/Linux', 
    'Básico JavaScript',
    'Estrutura de dados',
    'Programação Funcional (Haskell)'
]

cursosEmpreendedorismo = [
    'Marketing Digital',
    'Intelig',
    'Modelo de Negócio'
]

TodosOsCursos = [ // vamos usar o soreead aqui
    'Inkscape',
    'Gimp',
    'Photoshop',
    ...cursosTI, // espalhando
    ...cursosEmpreendedorismo // espalhando
]

console.log(TodosOsCursos)

/*-----------Saída----------

    [
    'Inkscape',
    'Gimp',
    'Photoshop',
    'Introdução GNU/Linux',
    'Básico JavaScript',
    'Estrutura de dados',
    'Programação Funcional (Haskell)',
    'Marketing Digital',
    'Intelig',
    'Modelo de Negócio'
    ]

*/

//------------------- Spread em objetos-----------------

livro = {
    autor : 'James Stewart',
    titulo : 'Cálculo II'
}

livrocopia = {
    paginas : 600,
    ...livro // espalhando
}

console.log(livrocopia)

/*-----------Saída----------

   { 
    paginas: 600, 
    autor: 'James Stewart', 
    titulo: 'Cálculo II' 
    }
*/


//------------------- Usando rest em listas simples-----------------
console.log('───────────────Usando rest em listas simples────────────────────')
console.log('──────────────────soma─────────────────────')

function soma(...param){
    let resultado = 0

    console.log(param)

    param.forEach( v => resultado+=v)

    return resultado
}
console.log(soma(3,8,5,7, -8, 10, 12, 12,41))

console.log('────────────────Multiplica───────────────────')
function multiplicacao(m, ...p){ 
    console.log(m)
    let resultado = 0;
    console.log(p)

    p.forEach(v=> resultado += m*v)
    return resultado
}

console.log(multiplicacao(5, 7, 12, 49))