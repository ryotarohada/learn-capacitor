const pEl = document.getElementById("value-element");
const buttonEl = document.getElementById("get-random-value-button");
buttonEl.addEventListener("click", () => {
  pEl.innerText = Math.random();
});
