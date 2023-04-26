function generate() {
	const nbDivs = document.querySelector(".nbBarsInput").value;

	for (let i = 0; i < nbDivs; i++) {
		const randomHeight = Math.floor(Math.random() * (500 - 1 + 1)) + 1;

		const div = document.createElement("div");
		div.id = `${i}`;
		div.style.height = `${randomHeight}px`;

		div.addEventListener("mouseover", () => {
			div.style.backgroundColor = "#1a4c81";
		});
		div.addEventListener("mouseout", () => {
			div.style.backgroundColor = "";
		});

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

async function start() {
	const bars = document.querySelectorAll(".sorting-container > *");
	const start = new Date();
	await bubbleSort(bars);
	valid(bars);
	const time = new Date().getTime() - start.getTime();
	console.log(time);
	document.querySelector(".time").innerHTML = `Execution Time : ${time} ms`;
}

function cssToNumber(css) {
	return Number(css.substring(0, css.length - 2));
}

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

async function valid(bars) {
	for (let i = 0; i < bars.length; i++) {
		bars[i].style.backgroundColor = "#1ce462";
		await sleep(4);
	}
	for (let i = 0; i < bars.length; i++) {
		bars[i].style.backgroundColor = "#f1faee";
		await sleep(4);
	}
}

async function bubbleSort(bars) {
	for (let i = bars.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			const currentH = cssToNumber(bars[j].style.height);
			const nextH = cssToNumber(bars[j + 1].style.height);
			if (currentH > nextH) {
				bars[j].style.backgroundColor = "#e63946";
				bars[j + 1].style.backgroundColor = "#e63946";
				await sleep(4);
				let smallH;
				smallH = bars[j + 1].style.height;
				bars[j + 1].style.height = bars[j].style.height;
				bars[j].style.height = smallH;
				await sleep(4);
				bars[j].style.backgroundColor = "#f1faee";
				bars[j + 1].style.backgroundColor = "#f1faee";
			}
		}
	}
}
