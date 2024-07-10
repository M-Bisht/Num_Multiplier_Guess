const betAmountInp = document.querySelector("#betAmount");
const targetNumberInp = document.querySelector("#targetNumber");
const numberMultiplier = document.querySelector("#numberMultiplier");
const betButton = document.querySelector("#betButton");
const winNum = document.querySelector("#winNum");
const lossNum = document.querySelector("#lossNum");
const overallNum = document.querySelector("#overallNum");
const overallDiv = document.querySelector(".overall");

let loss = 0;
let win = 0;
let overall = 0;

betButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 101);

  // Display the random number in the UI
  numberMultiplier.innerText = randomNumber;

  // Get values from input fields
  const betValue = betAmountInp.value;
  const targetNumValue = targetNumberInp.value;

  // Determine win or loss based on the random number and target number
  if (randomNumber < targetNumValue) {
    loss++;
    lossNum.innerText = loss;
    overall -= betValue;
  } else {
    win++;
    winNum.innerText = win;
    overall += betValue * targetNumValue;
  }

  // Update overall balance in the UI
  overallNum.innerText = overall;

  // Update color of overall balance based on its value
  if (overall > 0) {
    overallDiv.style.color = "#00e701"; // Green color
  } else if (overall < 0) {
    overallDiv.style.color = "red"; // Red color
  } else {
    overallDiv.style.color = ""; // Reset to default color if overall is zero
  }
});
