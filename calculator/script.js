const buttonleftparan = document.getElementById("openparanthesis");
const buttonrightparan = document.getElementById("rightparanthesis");
const buttonclear = document.getElementById("ac");
const buttonequal = document.getElementById("equals");
const buttonadd = document.getElementById("add");
const buttonsub = document.getElementById("sub");
const buttonmul = document.getElementById("mul");
const buttondiv = document.getElementById("div");
const buttonDel = document.getElementById("del");
const buttonpercent = document.getElementById("percent");
const buttonClearHistory = document.getElementById("clearhistory");
const screenOutput = document.getElementsByClassName("now")[0]; // the top display
const screenHistory = document.getElementsByClassName("history")[0];
let justCalculated = false;
let historyArray = [];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
numbers.forEach((num) => {
  document.getElementById(num).addEventListener("click", () => {
    if (justCalculated) {
      screenOutput.innerHTML = num;
      justCalculated = false;
    } else {
      screenOutput.innerHTML += num;
    }
  });
});

buttonadd.addEventListener("click", function () {
  screenOutput.innerHTML += "+";
});
buttonsub.addEventListener("click", function () {
  screenOutput.innerHTML += "-";
});
buttonmul.addEventListener("click", function () {
  screenOutput.innerHTML += "*";
});
buttondiv.addEventListener("click", function () {
  screenOutput.innerHTML += "/";
});
buttonleftparan.addEventListener("click", function () {
  screenOutput.innerHTML += "(";
});
buttonrightparan.addEventListener("click", function () {
  screenOutput.innerHTML += ")";
});
buttonpercent.addEventListener("click", function () {
  let current = screenOutput.innerHTML;
  if (current) {
    let num = parseFloat(current);
    let percentValue = num / 100;
    screenOutput.innerHTML = percentValue;
  }
});

buttonDel.addEventListener("click", function () {
  screenOutput.innerHTML = screenOutput.innerHTML.slice(0, -1);
});

buttonClearHistory.addEventListener("click", function () {
  screenHistory.innerHTML = "";
  historyArray = []; // clear array
});

function clearScreen() {
  screenOutput.innerHTML = "";
  justCalculated = false;
}

buttonclear.addEventListener("click", clearScreen);

function calculate() {
  try {
    let expression = screenOutput.innerHTML;

    let result = eval(expression);
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      throw "Math Error";
    }

    
    historyArray.push(expression + "=" + result);

    if (historyArray.length > 5) historyArray.shift();

    screenHistory.innerHTML = historyArray.join("<br>");

    screenOutput.innerHTML = result;
    justCalculated = true;
  } catch (err) {
    screenOutput.innerHTML = "Error";
    justCalculated = true;
  }
}

buttonequal.addEventListener("click", calculate);
