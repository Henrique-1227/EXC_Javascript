//EXEMPLO: 
function gerarTabuadaPar() {
    // Pega o valor do input
    const numero = parseInt(document.getElementById("inputNumero").value);

    // Seleciona o parágrafo onde o resultado será exibido
    const resultadoElemento = document.getElementById("resultadoTabuada");

    // Verifica se o número é válido
    if (isNaN(numero)) {
        resultadoElemento.innerText = "Por favor, insira um número válido.";
        return;
    }

    // Gera a tabuada apenas para os multiplicadores pares
    let tabuada = `Tabuada do ${numero} (somente multiplicadores pares):\n`;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) { // Apenas números pares
            tabuada += `${numero} x ${i} = ${numero * i}\n`;
        }
    }

    // Exibe o resultado no parágrafo
    resultadoElemento.innerText = tabuada;
}

// Esse evento é acionado quando o documento HTML foi completamente carregado e analisado, ou seja, o DOM (Document Object Model) está pronto para ser manipulado.
// A função passada como argumento será executada assim que o evento DOMContentLoaded for disparado. Isso é útil para garantir que o código seja executado apenas depois que os elementos da página estejam disponíveis.
document.addEventListener("DOMContentLoaded", () => {
    const botaoTabuada = document.getElementById("btnTabuada");
    botaoTabuada.addEventListener("mouseover", gerarTabuadaPar);
});




// função utilitaria
function bloquearCopia() {
    // Bloqueia o clique direito
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        alert("Cópia desabilitada no site.");
    });

    // Bloqueia a seleção de texto
    document.addEventListener("selectstart", (e) => {
        e.preventDefault();
        alert("Seleção de texto desabilitada.");
    });

    // Bloqueia atalhos de teclado (Ctrl+C, Ctrl+X, Ctrl+U)
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "u")) {
            e.preventDefault();
            alert("Este atalho está desabilitado no site.");
        }
    });
}
function verificarParImpar() {
    // Pega o valor do input
    const numero = parseInt(document.getElementById("inputNumeroParImpar").value);

    // Seleciona o parágrafo onde o resultado será exibido
    const resultadoElemento = document.getElementById("resultadoParImpar");

    // Verifica se o número é válido
    if (isNaN(numero)) {
        resultadoElemento.innerText = "Por favor, insira um número válido.";
        return;
    }

    // Verifica se o número é par ou ímpar
    const resultado = (numero % 2 === 0) ? `O número ${numero} é par.` : `O número ${numero} é ímpar.`;
    
    // Exibe o resultado no parágrafo
    resultadoElemento.innerText = resultado;
}
function calcularMedia() {
    // Obtém os valores das notas
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    // Seleciona o parágrafo onde o resultado será exibido
    const resultadoElemento = document.getElementById("resultadoMedia");

    // Verifica se todas as notas são válidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultadoElemento.innerText = "Por favor, insira todas as notas corretamente.";
        return;
    }

    // Calcula a média das três notas
    const media = (nota1 + nota2 + nota3) / 3;

    // Exibe o resultado no parágrafo com 2 casas decimais
    resultadoElemento.innerText = `A média das notas é: ${media.toFixed(2)}`;
}
function somarPares() {
    // Obtém o valor do número
    const numero = parseInt(document.getElementById("numSomaPares").value);

    // Seleciona o parágrafo onde o resultado será exibido
    const resultadoElemento = document.getElementById("resultadoSomaPares");

    // Verifica se o número é válido e positivo
    if (isNaN(numero) || numero <= 0) {
        resultadoElemento.innerText = "Por favor, insira um número inteiro positivo.";
        return;
    }

    // Calcula a soma dos números pares até o número informado
    let soma = 0;
    for (let i = 2; i <= numero; i += 2) {
        soma += i;
    }

    // Exibe o resultado no parágrafo
    resultadoElemento.innerText = `A soma dos números pares até ${numero} é: ${soma}`;
}
function validarLogin() {
    // Obtém os valores de usuário e senha
    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    // Seleciona o parágrafo onde o resultado será exibido
    const resultadoElemento = document.getElementById("resultadoLogin");

    // Verifica se o usuário e a senha estão corretos
    if (usuario === "admin" && senha === "1234") {
        resultadoElemento.innerText = "Login bem-sucedido!";
        resultadoElemento.style.color = "green"; // Exibe o sucesso em verde
    } else {
        resultadoElemento.innerText = "Usuário ou senha incorretos.";
        resultadoElemento.style.color = "red"; // Exibe o erro em vermelho
    }
}
function calcularFatorial() {
    // Obtém o valor do número
    const numero = parseInt(document.getElementById("numFatorial").value);

    // Seleciona o parágrafo onde o resultado será exibido
    const resultadoElemento = document.getElementById("resultadoFatorial");

    // Verifica se o número é válido e não-negativo
    if (isNaN(numero) || numero < 0) {
        resultadoElemento.innerText = "Por favor, insira um número inteiro não-negativo.";
        return;
    }

    // Calcula o fatorial
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    // Exibe o resultado no parágrafo
    resultadoElemento.innerText = `O fatorial de ${numero} é: ${fatorial}`;
}




