let summ = document.querySelector(".summ");

const buttons = Array.from(document.querySelectorAll(".button"));
// let eventText = e.target.innerText;
// const summText = innerText;

buttons.map((button) => {
  button.addEventListener("click", (event) => {
    // console.log(e.target.innerText);
    switch (event.target.innerText) {
      case "AC":
        summ.innerText = "0";
        break;
      case "=":
        summ.innerText = eval(summ.innerText);
        break;
      case "+/-":
        summ.innerText = "-";
        break;
      case "%":
        const text = summ.innerText + "/100";
        summ.innerText = eval(text);
        break;
      default:
        if (summ.innerText === "0" && event.target.innerText !== ".") {
          summ.innerText = event.target.innerText;
        } else {
          summ.innerText += event.target.innerText;
        }
    }
  });
});
