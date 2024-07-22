function navigateTo(page) {
    document.location.href = `${page}.html`;
}

function sendMessage(target) {
    let message = document.querySelector('.messageBox textarea').value;
    if (message.trim() === "") {
        alert("Por favor, digite uma mensagem.");
        return;
    }
    // Aqui você pode adicionar a lógica para enviar a mensagem
    alert(`Mensagem enviada para: ${target}`);
    document.querySelector('.messageBox textarea').value = ""
}
