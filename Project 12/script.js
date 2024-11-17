const display = document.getElementById('display');

function appendNumber(number) {
  display.value = display.value + number;
}

function appendOperator(operator) {
  if (display.value && !isNaN(display.value.slice(-1))) {
    display.value = display.value + operator;
  }
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value.replace('×', '*').replace('%', '/100'));
  } catch {
    display.value = 'Error';
    setTimeout(() => (display.value = ''), 1500);
  }
}
