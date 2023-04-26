function generate() {
	const nbDivs = document.querySelector(".nbBarsInput").value;

	for (let i = 0; i < nbDivs; i++) {
		const randomHeight = Math.floor(Math.random() * (500 - 1 + 1)) + 1;

		const div = document.createElement("div");
		div.id = `${i}`;
		div.style.height = `${randomHeight}px`;

		document.querySelector(".sorting-container").appendChild(div);
	}

	document.querySelector(".generateButton").disabled = true;
	document.querySelector(".startButton").disabled = false;
	document.querySelector(".stopButton").disabled = false;
}

function reset() {
	const children = document.querySelectorAll(".sorting-container > *");
	for (const child of children) {
		child.remove();
	}

	document.querySelector(".generateButton").disabled = false;
	document.querySelector(".startButton").disabled = true;
	document.querySelector(".stopButton").disabled = true;
}

function start() {
	const bars = document.querySelectorAll(".sorting-container > *");
	bubbleSort(bars);
}

function cssToNumber(css) {
	return Number(css.substring(0, css.length - 2));
}

function sleep() {
	return new Promise((r) => setTimeout(r, 4));
}

async function bubbleSort(bars) {
	for (let i = 1; i < bars.length; i++) {
		for (let j = 0; j < bars.length - i; j++) {
			const currentH = cssToNumber(bars[j].style.height);
			const nextH = cssToNumber(bars[j + 1].style.height);

			bars[j].style.backgroundColor = "#e63946";

			if (currentH > nextH) {
				// bars[j].style.backgroundColor = "#e63946";
				// bars[j + 1].style.backgroundColor = "#1d3557";
				let smallH;
				smallH = bars[j + 1].style.height;
				bars[j + 1].style.height = bars[j].style.height;
				bars[j].style.height = smallH;
				// bars[j].style.backgroundColor = "#f1faee";
				// bars[j + 1].style.backgroundColor = "#f1faee";
			}
			await sleep();
			bars[j].style.backgroundColor = "#f1faee";
		}
	}
}
