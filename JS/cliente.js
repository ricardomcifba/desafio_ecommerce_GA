function cadastrar(){

var name = document.getElementById("nome");
var nome = name.value;
var mail = document.getElementById("email");
var email = mail.value;
var enderec = document.getElementById("endereco");
var endereco = enderec.value;
var phone = document.getElementById("telefone");
var telefone = phone.value;

var cliente = [nome,email,endereco,telefone];

localStorage.setItem('cliente', JSON.stringify(cliente));
}

function cadastrado() {
    alert("Cadastrado com sucesso!");
}

function limpa() {
    if(document.getElementById('nome').value!="") {
        document.getElementById('nome').value="";
        document.getElementById('email').value="";
        document.getElementById('endereco').value="";
        document.getElementById('telefone').value="";
    }
}
