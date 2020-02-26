function soma(n1, n2) {
    var resultado = n1 + n2;
    return resultado;
}
console.log(soma(15, 20));




var album1 = {
    title: 'black',
    ano: 1991,
    showInfo: function () {
        console.log('Titulo do album: ${this.title}, lancado: ${this.ano}')
    }
}

var album = new Object();
album.title = 'teste';
album.ano = 1991;
showInfo: function () {
    console.log('Titulo do album: ${this.title}, lancado: ${this.ano}')
}

album.showInfo();
console.log(album.ano);
