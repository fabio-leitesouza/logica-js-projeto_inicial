let tabelaEntrada = [
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0]
]

function aleatorizandoTabela(tabela){
    for(let i = 0; i < tabela.length; i++){
        for(let j = 0; j < tabela[i].length; j++){
            tabela[i][j] = gerarNumeroAleatorio(100)
        }
    }
    return tabela;
}

function gerarNumeroAleatorio(range){
    return Math.floor(Math.random() * range + 1);
}

console.table(aleatorizandoTabela(tabelaEntrada));