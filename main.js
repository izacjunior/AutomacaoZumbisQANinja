
function welcome() {
    var welcome = "Hello javaScript - Automação1"
    document.getElementById("welcome").append(welcome)
    console.log(welcome)
}

welcome();

function soma(n1, n2){
    var resultado = n1 + n2;
    return resultado;
}
console.log(soma(15, 20));
