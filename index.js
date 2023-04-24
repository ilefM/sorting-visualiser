function generate() {
	const nbDivs = document.getElementById("nbElem").value;

	for (let i = 0; i < nbDivs; i++) {
		const randomHeight = Math.floor(Math.random() * (300 - 1 + 1)) + 0;

		const div = document.createElement("div");
		div.id = `${i}`;
		div.style.height = `${randomHeight}px`;

		document.getElementById("sorting-container").appendChild(div);
	}

	document.querySelector("#generateButton").disabled = true;
}

function restart() {
	const children = document.querySelectorAll("#sorting-container > *");
	for (const child of children) {
		child.remove();
	}

	document.querySelector("#generateButton").disabled = false;
}
