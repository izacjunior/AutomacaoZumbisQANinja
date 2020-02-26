

//html = Pagina

//h1 = cabeçalho / titulo
//p = paragrafo
//ul = agrupador de listas
//li = itens da lista do elemento ul
//a = link
//form = formularios
//input = campo de Text, checkbox, radio
//button = botoes
//span = elementos genericos
//tables = tabelas
//tds = colunas
//labels = TextDecoderStream

function somar() {
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;

    var result = parseInt(n1) + parseInt(n2);
    var divresultado = document.getElementById("resultado");
    divresultado.append("O resultado é: " + result);

    console.log(result)

}

