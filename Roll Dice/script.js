const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1: return "&#9856;"; // ⚀
    case 2: return "&#9857;"; // ⚁
    case 3: return "&#9858;"; // ⚂
    case 4: return "&#9859;"; // ⚃
    case 5: return "&#9860;"; // ⚄
    case 6: return "&#9861;"; // ⚅
    default: return "";
  }
}

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  historyList.push(rollResult);

  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace; // ✅ Show rolled face

  updateRollHistory();
}

function updateRollHistory() {
  const rollIndex = historyList.length;
  const lastRoll = historyList[rollIndex - 1];

  const listItem = document.createElement("li");
  listItem.innerHTML = `Roll ${rollIndex}: <span>${getDiceFace(lastRoll)}</span>`;
  // rollHistoryEl.append(listItem); // ✅ Latest on Down
  rollHistoryEl.prepend(listItem); // ✅ Latest on top
}

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");

  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000); // Match with CSS animation-duration
});
