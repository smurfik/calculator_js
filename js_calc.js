var answer;
var calc = function (n, num, m) {
  if (num == "1") {
    answer = n + m;
  } else if (num == "2") {
    answer = n - m;
  } else if (num == "3") {
    answer = n * m;
  } else {
    answer = n/m;
  }
  return answer
};

window.onload = function() {

  var answer;
  var ans = document.getElementById("answer");
  var submit = document.getElementById("submit");
  var firstNum = document.getElementById("first");
  var secondNum = document.getElementById("second");
  var operation = document.getElementById("sign");
  var n, m, num;

  submit.addEventListener('click', function (event) {
    n = parseInt(firstNum.value, 10);
    m = parseInt(secondNum.value, 10);
    num = operation.options[operation.selectedIndex].value;

    event.preventDefault();
    ans.value = calc(n, num, m);
    firstNum.value = calc(n, num, m);
  });

  var clear = document.getElementById("clear");

  clear.addEventListener('click', function (event) {
    firstNum.focus();
  });
};
