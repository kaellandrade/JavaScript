let pessoa = {
    nome : 'Maria',
    idade: 25
}
console.log(pessoa)

//---- add atributo------

pessoa.sexo = 'Feminino'
console.log(pessoa)

//---- add método------

pessoa.dizerOi =  () => 'Olá, tudo bem?' // arrow function
console.log(pessoa.dizerOi())
