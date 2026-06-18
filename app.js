let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

let contador_2 = 10;
while (contador_2 >= 0) {
    console.log(contador_2);
    contador_2--;
}

let numero_regressivo = prompt('Escolha um número para contagem regressiva');
while (numero_regressivo > 0) {
    console.log(numero_regressivo);
    numero_regressivo --;
}

let numero_progressivo = prompt('Escolha um número para contagem progessiva');;
let contador_3 = 0;

while (contador_3 <= numero_progressivo) {
    console.log(contador_3);
    contador_3 ++;
}