var idade = prompt("Qual a sua idade?");

if (idade >= 17) {

    console.log("Posso ir no show");
} else if (idade >= 12) {
    console.log('Posso ir no show')
} else {
    console.log('show de Palhaço')
}

var ingresso = prompt('Qual e o seu teste?');
switch (ingresso) {
    case vip:
        console.log('teste1')
        break;
    case 'premium':
        console.log('teste2')
        break;
    case 'comum':
        console.log('teste3')
        break;
    default:
        console.log('teste4')
}
