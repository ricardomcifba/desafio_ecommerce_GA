function calcularTotal(){
    var abreTela = document.getElementById("comprar");
    abreTela.style.display = "block";
    var quantidade = document.getElementById("qtde").value;
    var total = 2499.50 * parseInt(quantidade);
    if(Number.isNaN(total)){
            
    }
    else{
        document.getElementById("total").value = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
    
}

function fecharTelaCompra() {
    var x = document.getElementById("comprar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
