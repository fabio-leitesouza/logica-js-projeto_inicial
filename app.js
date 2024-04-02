function gerarNumeroAleatorio(index){
    return Math.floor(Math.random() * index + 1);
}

function jogo () {
    let numeroDePosicoesAleatorias = parseInt(prompt('Quantos númeos você quer aleatorizar'))
    let numeroDeTentativas = parseInt(prompt('Em quantas tentativas você quer tentar adivinhas?'))
    let numeroSecreto = gerarNumeroAleatorio(numeroDePosicoesAleatorias);

    for(let tentativas = 0; tentativas < numeroDeTentativas; tentativas++){
        let numeroDigitado = parseInt(prompt(`Digite um número de 1 a ${numeroDePosicoesAleatorias}`));
        if(numeroDigitado === numeroSecreto){
            alert('Parabéns, você acertou!');
            break;
        } else if(numeroDigitado > numeroSecreto){
            alert('Você digitou um número maior que o número secreto');
        } else {
            alert('Você digitou um número menor que o número secreto');
        }
        if(tentativas === numeroDeTentativas){
            alert(`Suas tentativas acabaram`);
        } else if (tentativas <= numeroDeTentativas){
            alert(`você ainda tem  ${numeroDeTentativas - tentativas - 1} tentativas`);   
        }else{
            alert(`você ainda tem  ${numeroDePosicoesAleatorias - tentativas - 1} tentativa`);
        }    
    }
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(tentativas < numeroDeTentativas){
        alert(`Você acertou com ${tentativas} ${palavraTentativa}`)
    }
} 

function clicou() {
    jogo();
}



