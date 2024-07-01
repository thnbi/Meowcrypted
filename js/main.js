import { encrypt, decrypt } from "./cipher.js";
import {
	updateAnswerPanel,
	copyToClipboard,
	clearUserInput,
} from "./ui-interactions.js";

const userInput = document.querySelector(".request-panel__input");
const answerPanel = document.querySelector(".answer-panel");

const buttonEncrypt = document.querySelector(".criptografar");
const buttonDecrypt = document.querySelector(".descriptografar");

answerPanel.addEventListener("click", copyToClipboard);

buttonEncrypt.addEventListener("click", () => {
	let value = userInput.value;
	let encryptedText = encrypt(value);

	clearUserInput();
	updateAnswerPanel(encryptedText);
});

buttonDecrypt.addEventListener("click", () => {
	let value = userInput.value;
	let decryptedText = decrypt(value);

	clearUserInput();
	updateAnswerPanel(decryptedText);
});
