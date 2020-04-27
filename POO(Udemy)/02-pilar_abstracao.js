
class Sofa{

    // Iniciando os atributos
    constructor(marca, cor, qt_lugares,reclinavel,material_forro){
        this.marca = marca
        this.cor = cor
        this.qt_lugares = qt_lugares
        this.reclinavel = reclinavel
        this.material_forro = material_forro
    }

    // Métodos
    verificaReclinavel(){
        if(this.reclinavel === true){
            return 'Sofá reclinável'
        }else{
            return 'Sofá não é reclinável'
        }
    }

    materialForro(){
        return `Material do forro é ${this.material_forro}`

    }

}

// criando array de objetos
sofas = Array()
sofas.push(new Sofa('confrotk', 'azul', 4, true, 'malha'))
sofas.push(new Sofa('conka', 'preto', 1, false, 'veludo'))
sofas.push(new Sofa('happyk', 'branco', 7, true, 'saco'))
sofas.push(new Sofa('sleepH', 'verde', 4, false, 'linho'))

// Mostrando todos os objetos criados e seus respectivos atributos
for (let key in sofas) {
    console.log(
        `${key}
        Marca: ${sofas[key]['marca']}
        Cor: ${sofas[key]['cor']}
        Lugares: ${sofas[key]['qt_lugares']}
        Reclinável: ${sofas[key].verificaReclinavel()}
        Forro: ${sofas[key].materialForro()}
    `)
    console.log('------------------------')
}

/* Saída
    0
        Marca: confrotk
        Cor: azul
        Lugares: 4
        Reclinável: Sofá reclinável
        Forro: Material do forro é malha
    
------------------------
1
        Marca: conka
        Cor: preto
        Lugares: 1
        Reclinável: Sofá não é reclinável
        Forro: Material do forro é veludo
    
------------------------
2
        Marca: happyk
        Cor: branco
        Lugares: 7
        Reclinável: Sofá reclinável
        Forro: Material do forro é saco
    
------------------------
3
        Marca: sleepH
        Cor: verde
        Lugares: 4
        Reclinável: Sofá não é reclinável
        Forro: Material do forro é linho
    
------------------------
*/