// Selecionando elementos do DOM 
const textInput = document.getElementById("textInput");
const alertButton = document.getElementById("alertButton");
const clearButton = document.getElementById("clearButton");
const displayText = document.getElementById("displayText"); // Evento de input para atualizar o texto em tempo real
textInput.addEventListener('input', function () {     // Mostra o texto digitado na <p> displayText
    displayText.textContent = textInput.value;
}); // Evento de clique para mostrar um alerta com o texto digitado
alertButton.addEventListener('click', function () {
    // Exibe um alerta com o texto atual do input    
    alert(`Você digitou: ${textInput.value}`);
});
// Evento de clique para limpar o campo de texto e o display
clearButton.addEventListener('click', function () {
    // Limpa o campo de input e o <p> displayText    
    textInput.value = '';
    displayText.textContent = '';
});