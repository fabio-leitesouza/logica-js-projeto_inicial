let atividade = [
    ['acorda', 5],
    ['aula', 7]
]

for(let i = 0; i < 2; i++){
    for(let j = 0; j < 2; j++){
        alert(atividade[i][j])
    }
}

let matrizString = JSON.stringify(atividade);
alert(matrizString);