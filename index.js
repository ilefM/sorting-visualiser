function generate() {
  const nbDivs = document.getElementById("nbElem").value;

  for (let i = 0; i < 4; i++) {
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

function start() {
  const bars = document.querySelectorAll("#sorting-container > *");

  for (let i = 0; i < bars.length - 1; i++) {
    if (bars[i].style.height > bars[i + 1].style.height) {
      const smallBarHeight = bars[i + 1].style.height;
      bars[i + 1].style.height = bars[i].style.height;
      bars[i].style.height = smallBarHeight;
    }
  }
}
