function fecharCompra() {
    var abrirCompra = document.getElementById("comprar");
    abrirCompra.style.display = "block";
    var produto = document.getElementById("produto");
    var qtde = parseFloat(document.getElementById("qtde")).value;
    var total = 2499.50 * qtde;
    document.getElementById("total") = total;
}

function fecharTelaCompra() {
    var x = document.getElementById("comprar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}