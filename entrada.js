const usuarioValor = document.getElementById("inputUsuario")
const senhaValor = document.getElementById("inputSenha")
const botao = document.getElementById("btnAcesso")

botao.addEventListener("click", (e) => {

    const usuario = usuarioValor.value;
    const senha = senhaValor.value;

    if (!usuario || !senha) {
        alert("Por favor, preencha o usuário e a senha.");
        return;
    }

    window.location.href = ("dashboard.html")
});