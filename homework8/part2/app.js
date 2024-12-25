const listItems = document.querySelectorAll("#numberList li");

const numbers = Array.from(listItems).map((item) => parseInt(item.innerText));

let sum = 0;
let equation = "";

numbers.forEach((num, index) => {
  sum += num;
  if (index === numbers.length - 1) {
    equation += `${num} = ${sum}`;
  } else {
    equation += `${num} + `;
  }
});

document.getElementById("sum").innerText = `Sum: ${sum}`;
document.getElementById("equation").innerText = `Equation: ${equation}`;
