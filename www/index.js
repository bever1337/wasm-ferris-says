import * as wasm from "wasm-ferris-says";

const ferris = document.querySelector("#ferris");
const ferris_form = document.querySelector("#ferris_says_form");
const ferris_says_say = document.querySelector("#ferris_says_say");
const ferris_says_width = document.querySelector("#ferris_says_width");

updateFerris(); // init ferris

ferris_form.addEventListener("reset", resetFerris);
ferris_says_say.addEventListener("input", updateFerris);
ferris_says_width.addEventListener("input", updateFerris);

function resetFerris() {
  setTimeout(updateFerris, 0);
}

function updateFerris() {
  let nextWidth = parseInt(ferris_says_width.value, 10);
  const invalidNextWidth = typeof nextWidth !== "number" || isNaN(nextWidth);
  if (invalidNextWidth) {
    nextWidth = ferris_says_say.value.length;
  }
  while (ferris.firstChild) {
    ferris.firstChild.remove();
  }
  const nextFerris = wasm.say(ferris_says_say.value, nextWidth);
  ferris.appendChild(document.createTextNode(nextFerris));
}
