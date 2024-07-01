function encrypt(text) {
	const replacements = {
		a: "ai",
		e: "enter",
		i: "imes",
		o: "ober",
		u: "ufat",
	};

	return text
		.split("")
		.map((char) => replacements[char] || char)
		.join("");
}

function decrypt(text) {
	const replacements = {
		ai: "a",
		enter: "e",
		imes: "i",
		ober: "o",
		ufat: "u",
	};

	return text
		.split(/(ai|enter|imes|ober|ufat)/)
		.map((char) => replacements[char] || char)
		.join("");
}

export { encrypt, decrypt };
