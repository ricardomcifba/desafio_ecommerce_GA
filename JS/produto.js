function cadastrar(){

var name = document.getElementById("nome");
var nome = name.value;
var desc = document.getElementById("descricao");
var descricao = desc.value;
var fabri = document.getElementById("fabricante");
var fabricante = fabri.value;
var price = document.getElementById("preco");
var preco = price.value;

var cliente = [nome,descricao,fabricante,preco];

localStorage.setItem('cliente', JSON.stringify(cliente));
}

function cadastrado() {
    alert("Cadastrado com sucesso!");
}

function limpa() {
    if(document.getElementById('nome').value!="") {
        document.getElementById('nome').value="";
        document.getElementById('descricao').value="";
        document.getElementById('fabricante').value="";
        document.getElementById('preco').value="";
    }
}
