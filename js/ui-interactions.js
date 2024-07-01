const userInput = document.querySelector(".request-panel__input");
const answerPanel = document.querySelector(".answer-panel");

function updateAnswerPanel(answer) {
	answerPanel.classList.remove("answer-panel__align");
	answerPanel.innerHTML = `<p class="answer-text">${answer}</p>`;
}

function copyToClipboard() {
	const text = answerPanel.innerText;
	navigator.clipboard.writeText(text);
}

function clearUserInput() {
	userInput.value = "";
}

export { updateAnswerPanel, copyToClipboard, clearUserInput };
