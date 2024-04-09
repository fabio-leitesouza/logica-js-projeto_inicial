let tabuleiro = [
    ['','',''],
    ['','',''],
    ['','','']
]

let jogador = 'x';

function jogo(linha, coluna) {
    // jogador === 'x' ? alert('É a vez do jogador 01') : alert('É a vez do jogador 02') 
    tabuleiro[linha][coluna] = jogador;
    jogador === 'x' ? jogador = 'o' : jogador = 'x';
    
}

jogo(1, 1);
jogo(1, 2);
jogo(2, 2);
jogo(0, 0);

console.table(tabuleiro);   