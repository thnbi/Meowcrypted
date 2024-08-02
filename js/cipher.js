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

function meowEncrypt(text) {
	const meowSubstitution = {
		a: "meow",
		e: "mew",
		i: "miaow",
		o: "mrr",
		u: "miau",
	};
	return text.replace(/[aeiou]/g, (match) => meowSubstitution[match]);
}

function meowDecrypt(text) {
	const reverseMeowSubstitution = {
		meow: "a",
		mew: "e",
		miaow: "i",
		mrr: "o",
		miau: "u",
	};
	return text.replace(
		/meow|mew|miaow|mrr|miau/g,
		(match) => reverseMeowSubstitution[match]
	);
}

export { encrypt, decrypt, meowEncrypt, meowDecrypt };
