var block = document.querySelector('.block');
document.querySelector('.matricula').innerHTML = `Mátricula: ${String(Math.random()).slice(2)}`

var mensagem0 = "Mudança na grade horária de educação física";
var mensagem1 = "Lembrete: prova de matemática amanhã";
var mensagem2 = "Novo material de biologia disponível";
var mensagem3 = "Reunião de pais e mestres na sexta";
var mensagem4 = "Aula de história cancelada hoje";
var mensagem5 = "Inscrições abertas para o torneio de xadrez";
var mensagem6 = "Entrega do trabalho de química na próxima semana";
var mensagem7 = "Nota da redação já disponível no portal";
var mensagem8 = "Palestra sobre carreira na segunda-feira";
var mensagem9 = "Resultado do simulado de física online";


for(let i = 0; i < 10; i++)
{   block.innerHTML += `<div class="${"p"+i%2}"> ${eval("mensagem"+parseInt(Math.random()*9))}</div>`;
}