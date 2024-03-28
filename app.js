let numeroSecreto = Math.floor(Math.random() * 5 + 1);
let tentativas = 1;

while (tentativas < 4) {
    let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));
    if(numeroDigitado === numeroSecreto){
        alert('Parabéns, você acertou!');
        break;
    } else if(numeroDigitado > numeroSecreto){
        alert('Você digitou um número maior que o número secreto');
    } else {
        alert('Você digitou um número menor que o número secreto');
    }
    tentativas++;
    if(tentativas === 4){
        alert(`Suas tentativas acabaram`);
    } else if (tentativas <3){
        alert(`você ainda tem  ${4 - tentativas} tentativas`);   
    }else{
        alert(`você ainda tem  ${4 - tentativas} tentativa`);
    }
    
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
if(tentativas < 4){
    alert(`Você acertou com ${tentativas} ${palavraTentativa}`)
}

