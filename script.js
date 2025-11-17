let count = 0;

const counterDisplay = document.getElementById("counter");
const btnInc = document.getElementById("btn-inc");
const btnDec = document.getElementById("btn-dec");
const btnReset = document.getElementById("btn-reset");

btnInc.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});

btnDec.addEventListener("click", () => {
    count--;
    counterDisplay.textContent = count;
});

btnReset.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
});
