const display = document.getElementById("display");

function appendValue(value) {
  const operators = ["+", "-", "*", "/", "%"];
  const lastChar = display.value.slice(-1);

  if (operators.includes(value)) {
    if (display.value === "") return;

    if (operators.includes(lastChar)) {
      display.value = display.value.slice(0, -1) + value;
      return;
    }
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    if (display.value.trim() === "") return;

    const lastChar = display.value.slice(-1);
    const operators = ["+", "-", "*", "/", "%"];

    if (operators.includes(lastChar)) {
      display.value = display.value.slice(0, -1);
    }

    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", ".", "%"].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
