import { hideCursor, showCursor } from "./cursor.js";

const userInput = document.querySelector(".request-panel__input");
const answerPanel = document.querySelector(".answer-panel");

function updateAnswerPanel(answer) {
	answerPanel.classList.remove("answer-panel__align");

	answerPanel.addEventListener("mouseover", showCursor);
	answerPanel.addEventListener("mouseout", hideCursor);

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
