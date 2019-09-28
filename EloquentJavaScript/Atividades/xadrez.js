var tabuleiro = "";
var size = 8;

for (cont = 1; cont <= size; cont++) { // Loop que conta minhas linhas
    for (cont2 = 1 ;cont2 <= size; cont2++) { // Loop responsável por adcionar Strings
        if ((cont + cont2)%2 == 0) {
            tabuleiro += "#"
        }else{
            tabuleiro += " "
        }
    };
    tabuleiro+="\n";
}
console.log(tabuleiro);