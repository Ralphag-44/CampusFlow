var blockAside = document.querySelector('.blockAside');
var a0 = "ENGENHARIA DE SOFTWARE"; 
var a1 = "SOCIOLOGIA I"; 
var a2 = "MATEMÁTICA III"; 
var a3 = "LÍNGUA PORTUGUESA E LITERATURA III"; 
var a4 = "EDUCAÇÃO FÍSICA III"; 
var a5 = "FÍSICA III"; 
var a6 = "QUÍMICA II"; 
var a7 = "GEOGRAFIA I"; 
var a8 = "BIOLOGIA I"; 
var a9 = "PROGRAMAÇÃO WEB BACK-END"; 
for(let i = 0; i < 10; i++)
    {   blockAside.innerHTML += `<div class="${"p"+i%2}" onclick="materiaPage()"> ${eval("a"+parseInt(Math.random()*9))}</div>`;
    }
    


var aux=1;
function aside(){
    let aside = document.querySelector('#aside');
    let menubar = document.querySelector('.menu')
    aux++;
    if(aux%2==0){
        aside.style.left = 0;
        // menubar.style.position = 'absolute';
        // menubar.style.left = '1vw';
    }
    else{ 
        aside.style.left = '-50vw';
        // menubar.style.position = 'relative';
    }
}
document.querySelector('.docs').addEventListener('click',showDocs);


var docs = document.querySelector('.docsOn');
var aux2 = 0;
function showDocs()
{   aux2++;
    if(aux2%2) docs.style.display = 'flex';
    else docs.style.display = 'none';
}

function myFunction(x) {
    x.classList.toggle("change");
}

function materiaPage()
{   document.location.href = 'materiaPage.html'

}

function aluno_ac()
{   document.location.href = 'aluno_ac.html'

}

function dis_dire()
{   document.location.href = 'discente_direcao.html'

}

let timer = setInterval(timerLoop,1000)
let timerCount = (document.querySelector('.timer')).innerHTML.slice(7)
let timerBefore = (document.querySelector('.timer')).innerHTML.slice(0,7)


function timerLoop()
{   let timerCount = (document.querySelector('.timer')).innerHTML.slice(7)
    let timerBefore = (document.querySelector('.timer')).innerHTML.slice(0,7)
    document.querySelector('.timer').innerHTML = timerBefore+(Number(timerCount)-1)
}
