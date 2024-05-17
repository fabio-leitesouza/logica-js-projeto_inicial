//Crie um programa em que o usuário digita sua idade e aparece um alerta se ele é maior o menor 
let maioridade = 18;
let nome = prompt('Digite seu nome');
let idade = parseInt(prompt('Digite sua idade'));

if (idade >= maioridade) {
    alert('Você atingiu a maioridade')
} else {
    alert('Você ainda é uma infanto juvenil')
}