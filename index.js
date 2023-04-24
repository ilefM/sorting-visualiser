function generate() {
	const nbDivs = document.getElementById("nbPipes").value;

	for (let i = 0; i < nbDivs; i++) {
		const div = document.createElement("div");
		div.id = `pipe${i}`;
		div.style.width = "30px";
		div.style.height = "100px";
		div.style.marginLeft = "10px";
		div.style.background = "red";

		document.getElementById("main").appendChild(div);
	}
}

function restart() {
	document.getElementById("main").removeChild(document.getElementById("pipe"));
}
