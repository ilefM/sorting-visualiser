function generate() {
	const nbDivs = document.getElementById("nbElem").value;

	for (let i = 0; i < 2; i++) {
		const randomHeight = Math.floor(Math.random() * (500 - 1 + 1)) + 0;

		const div = document.createElement("div");
		div.id = `${i}`;
		div.style.height = `${randomHeight}px`;

		document.getElementById("sorting-container").appendChild(div);
	}

	document.querySelector("#generateButton").disabled = true;
}

function reset() {
	const children = document.querySelectorAll("#sorting-container > *");
	for (const child of children) {
		child.remove();
	}

	document.querySelector("#generateButton").disabled = false;
}

function start(){
	const children = document.querySelectorAll("#sorting-container > *");
	
	for(let i = 0; i < children.length(); i++){
		if(children[i].style.height > children[i+1].style.height){
			
		}
	}
}
