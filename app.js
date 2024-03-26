alert('Bem vindo ao jogo');

let numeroSecreto = 25;
let numeroEscolhido = parseInt(prompt('Digite um número de 1 a 50'));
 
if(numeroSecreto == numeroEscolhido){
    alert('Parabéns você acertou');
    } else if(numeroEscolhido > numeroSecreto){
        alert('Você digitou um número maior que o número secreto');
    } else{
        alert('Você digitou um número menor que o número secreto');
    }
