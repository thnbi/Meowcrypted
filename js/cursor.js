const cursor = document.querySelector(".cursor");

const positionElement = (e) => {
	const mouseY = e.clientY;
	const mouseX = e.clientX;

	cursor.style.transform = `translate3d(${mouseX + 10}px, ${
		mouseY + 10
	}px, 0)`;
};

const showCursor = () => {
	cursor.classList.add("cursor-visible");
	document.addEventListener("mousemove", positionElement);
};

const hideCursor = () => {
	cursor.classList.remove("cursor-visible");
};

export { showCursor, hideCursor };
