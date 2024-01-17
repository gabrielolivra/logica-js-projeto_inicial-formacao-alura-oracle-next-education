// alert("Bem vindo ao jogo secreto")
// const numeroSorte = 10
// const numeroUsuario = prompt("Digite um numero de 1 a 10: ")
// if (parseInt(numeroUsuario) === numeroSorte) {
//     alert('Voce acertou')
// }
// else {
//     alert("voce errou")
//     return
// }
// alert(numeroUsuario)


alert("Bem vindo ao jogo secreto")

let qtd_tentativa = 1;
const numeroSecreto = parseInt(Math.random() * 10);
function sorteador() {
    console.log(numeroSecreto)
    const numeroUsuario = prompt("Digite um numero de 0 a 10: ")
    if (numeroSecreto === parseInt(numeroUsuario)) {
        let tentativas = qtd_tentativa > 1 ? 'tentativas' : 'tentativa'
        alert(`Parabens voce acertou o numero em ${qtd_tentativa} ${tentativas}`)
    }
    else {
        alert(`Você errou! Quantidades de tentativas: ${qtd_tentativa}`)
        console.log(qtd_tentativa)
        qtd_tentativa++
        sorteador()
    }
}
sorteador()


// alert("Boas vindas ao nosso site!")
// let nome = "Lua"
// let idade = 25
// let numeroDeVendas = 50
// let saldoDisponivel = 1000
// alert("Erro! Preencha todos os campos.")
// let mensagemDeErro = "Erro! Preencha todos os campos."
// alert(mensagemDeErro)
// nome = prompt("Qual o seu nome?")
// idade = prompt("Digite sua idade")
// if (idade > 18) {
//     alert("Pode tirar a habilitação!")
// }



// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0
// let contador = 0;

// while (contador != parseInt(qtdNumeros)) {
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
//     contador++

// }

// let media = soma / qtdNumeros;
// console.log("resultado5")
// console.log(media);
