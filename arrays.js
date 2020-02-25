//var teste = new Array();

var teste = ['teste1', 'teste2', 'teste3'];
console.log(teste);

//add a lista
teste.push('teste4')
console.log(teste)

//remove o ultimo da lista
teste.pop()
console.log(teste)
//remover o primeiro da lista
teste.shift();

var indice = teste.indexOf('teste2')
//Remover conforme a posicao
teste.splice(indice)
console.log(indice)
