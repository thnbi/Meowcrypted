import { encrypt, decrypt, meowEncrypt, meowDecrypt } from "./cipher.js";
import {
	updateAnswerPanel,
	copyToClipboard,
	clearUserInput,
} from "./ui-interactions.js";

const userInput = document.querySelector(".request-panel__input");
const answerPanel = document.querySelector(".answer-panel");

const buttonEncrypt = document.querySelector(".criptografar");
const buttonDecrypt = document.querySelector(".descriptografar");

const meowMode = document.querySelector(".meow-mode");

meowMode.addEventListener("click", () => {
	if (meowMode.classList.contains("active")) {
		meowMode.classList.remove("active");
	} else {
		meowMode.classList.add("active");
	}
});

answerPanel.addEventListener("click", copyToClipboard);

buttonEncrypt.addEventListener("click", () => {
	let value = userInput.value;
	let encryptedText;

	if (meowMode.classList.contains("active")) {
		encryptedText = meowEncrypt(value);
	} else {
		encryptedText = encrypt(value);
	}

	clearUserInput();
	updateAnswerPanel(encryptedText);
});

buttonDecrypt.addEventListener("click", () => {
	let value = userInput.value;
	let decryptedText;

	if (meowMode.classList.contains("active")) {
		decryptedText = meowDecrypt(value);
	} else {
		decryptedText = decrypt(value);
	}

	clearUserInput();
	updateAnswerPanel(decryptedText);
});
