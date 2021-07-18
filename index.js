function fecharCompra(){
    var abrirCompra = document.getElementById("comprar");
    abrirCompra.style.display = "block";
    var produto = document.getElementById("produto");
    var qtde = parseFloat(document.getElementById("qtde")).value;
    var total = 2499.50 * qtde;
    document.getElementById("total") = total;
}

function fecharTelaCompra(){
    var fechar = document.getElementById("comprar");
    fechar.style.display = none;
}