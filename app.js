somaNumeros(1, 2);
let numeroSecreto = Math.floor(Math.random() * 5 + 1);
// let tentativas = 1;

//while é para repetir o código enquanto o numero de tentativas for menor que 4

for(let tentativas = 0; tentativas < 3; tentativas++){
    let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));
    if(numeroDigitado === numeroSecreto){
        alert('Parabéns, você acertou!');
        break;
    } else if(numeroDigitado > numeroSecreto){
        alert('Você digitou um número maior que o número secreto');
    } else {
        alert('Você digitou um número menor que o número secreto');
    }
    if(tentativas === 3){
        alert(`Suas tentativas acabaram`);
    } else if (tentativas <2){
        alert(`você ainda tem  ${2 - tentativas} tentativas`);   
    }else{
        alert(`você ainda tem  ${2 - tentativas} tentativa`);
    }    
}

//palavraTentativa recebendo o resultado de um tenário (ou 'tentativas' ou 'tentativa')
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
if(tentativas < 4){
    alert(`Você acertou com ${tentativas} ${palavraTentativa}`)
}

