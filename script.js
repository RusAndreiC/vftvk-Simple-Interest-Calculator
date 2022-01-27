function compute() {
  y = new Date().getFullYear();
  p = document.getElementById("principal").value;
  n = document.getElementById("years").value;
  r = document.getElementById("rate").value;
  result = document.getElementById("result");

  principcipaText.innerHTML = "If you deposit ";
  principalNumber.innerHTML = p;
  commaText.innerHTML = ",";
  rateText.innerHTML = "at an interest rate of ";
  rateNumber.innerHTML = r;
  percentText.innerHTML = "%.";
  resltText.innerHTML = " You will receive an amount of ";
  result.innerHTML = (p * n * r) / 100;
  commaText2.innerHTML = ",";
  var convertNumber = parseInt(n);
  var resultYers = y + convertNumber;
  yearText.innerHTML = " in the year ";
  numberOfYears.innerHTML = resultYers;
}
