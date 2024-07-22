document.querySelector('.submit').addEventListener('click',changePage);

function password(div)
{   
    div.innerHTML = 'Um email foi enviado para sua caixa de entrada para registrar a nova senha.' 
    div.style.color = 'gray';
    div.style.cursor = 'default';
}
function changePage()
{   var type = document.querySelector('.type').value;
    if(type)    document.location.href = `${type}.html`;
}