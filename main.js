
var welcome = "Hello javaScript - Automação"
document.getElementById("welcome").append(welcome)

console.log(welcome)

var idade = prompt("Qual a sua idade?")

if(idade >= 17){

    console.log("Posso ir no show");
}else if(idade >= 12){
    console.log('Posso ir no show')
}else{
    console.log('show de Palhaço')
}
