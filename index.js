function generate() {
	const nbDivs = document.getElementById("nbElem").value;

	for (let i = 0; i < nbDivs; i++) {
		const randomHeight = Math.floor(Math.random() * (500 - 1 + 1)) + 1;

		const div = document.createElement("div");
		div.id = `${i}`;
		div.style.height = `${randomHeight}px`;

		document.getElementById("sorting-container").appendChild(div);
	}

	document.querySelector("#generateButton").disabled = true;
	document.querySelector("#startButton").disabled = false;
	document.querySelector("#stopButton").disabled = false;
}

function reset() {
	const children = document.querySelectorAll("#sorting-container > *");
	for (const child of children) {
		child.remove();
	}

	document.querySelector("#generateButton").disabled = false;
}

function start() {
	const bars = document.querySelectorAll("#sorting-container > *");
	bubbleSort(bars);
}

function bubbleSort(bars) {
	for (let i = 0; i < bars.length - 1; i++) {
		if (bars[i].style.height > bars[i + 1].style.height) {
			const smallBarHeight = bars[i + 1].style.height;
			bars[i + 1].style.height = bars[i].style.height;
			bars[i].style.height = smallBarHeight;
		}
	}
}
