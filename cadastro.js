const nome = document.getElementById("inputNome");
const sobrenome = document.getElementById("inputSobrenome");
const email = document.getElementById("inputEmail");
const telefone = document.getElementById("inputTelefone");
const cpf = document.getElementById("inputCpf");
const senha = document.getElementById("inputSenha");
const confirmarSenha = document.getElementById("inputConfirmarSenha");

const btnCadastrar = document.getElementById("btnCadastrar");
const btnVoltar = document.getElementById("btnVoltar");


btnCadastrar.addEventListener("click", () => {

    if (
        !nome.value.trim() ||
        !sobrenome.value.trim() ||
        !email.value.trim() ||
        !telefone.value.trim() ||
        !cpf.value.trim() ||
        !senha.value ||
        !confirmarSenha.value
    ) {
        alert("Por favor, preencha todos os campos.");
        return;
    }


    if (senha.value !== confirmarSenha.value) {
        alert("As senhas não coincidem.");
        return;
    }


    alert("Cadastro realizado com sucesso!");

});


btnVoltar.addEventListener("click", () => {

    window.location.href = "entrada.html";

});
