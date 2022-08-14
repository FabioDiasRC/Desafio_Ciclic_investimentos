import answer from "./answer.js";

//function for post
function post(url, body) {
  const request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("content-type", "post/json");
  request.send(JSON.stringify(body));
  console.log(url, body);
}

//function to get the values from the forms
export default function values(e) {
  e.preventDefault();

  //values to calculate
  const name = document.getElementById("name").value;
  const monthly = document.getElementById("monthly").value;
  const time = document.getElementById("time").value;
  const interestRate = 0.00517; //interest rate from example in the challenge

  //values to string
  const url = "http://api.mathjs.org/";
  const monthlyString = monthly.toString();
  const timeString = (time * 12).toString();
  const interestRateString = interestRate.toString();

  //body for post in api
  const body = {
    expr: `${monthlyString} * (((1 + ${interestRateString}) ^ ${timeString} - 1) / ${interestRateString})`,
  };

  const value = (monthly*(((1+interestRate)**(time*12) - 1) / interestRate)).toFixed(2).replace(".", ",")

  post(url, body);
  return answer(name, monthly, value, time);
}

const btn = document.querySelector("[form__data]");
btn.addEventListener("submit", (event) => values(event));
