//Loops - Repetições

for (var a = 0; a < 10; a++) {
    console.log('Repetindo ${a} yes')
}

var i = 0;
while (i <= 10) {
    console.log("Teste ${i}")
    i++;
}

var teste = ['teste1', 'teste2', 'teste3'];
teste.forEach(function (value, key) {
    console.log('${value} na posicao ${key}')
})
