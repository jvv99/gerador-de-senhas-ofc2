// Seleciona os elementos do HTML que vamos usar
const botao = document.getElementById("btnGerar");
const display = document.getElementById("passwordDisplay");

// Função que gera a senha numérica
function gerarSenhaBancaria() {
    let senha = "";
    
    // Loop para gerar 6 números aleatórios
    for (let i = 0; i < 6; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 10);
        senha += numeroAleatorio;
    }
    
    // Coloca a senha gerada dentro do display
    display.innerText = senha;
}

// Configura o botão para disparar a função quando for clicado
botao.addEventListener("click", gerarSenhaBancaria);