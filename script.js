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

// ❌ БАГ: кнопка Reset не скидає лічильник
btnReset.addEventListener("click", () => {
    counterDisplay.textContent = 0; 
    // BUG: count не оновлюється, тому лічильник "ламається"
});
