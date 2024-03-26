alert('Bem vindo ao jogo, tente descobrir o número secreto');

let numeroSecreto = Math.floor(Math.random() * 16);

let numeroTentativas = 0;

while (numeroTentativas <= 2) {
    let numeroEscolhido = parseInt(prompt('Digite um número de 0 a 15'));
    if(numeroSecreto == numeroEscolhido){
        alert(`Parabéns você acertou o número ${numeroSecreto}`);
        break;
        } else if(numeroEscolhido > numeroSecreto){
            alert(`Você digitou ${numeroEscolhido} que é um número maior que o número secreto`);
        } else{
            alert(`Você digitou ${numeroEscolhido} que é um número menor que o número secreto`);
        }
    numeroTentativas = numeroTentativas + 1;
}