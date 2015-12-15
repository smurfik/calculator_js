var calc = function (n, num, m) {
  var answer;
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

  var answer, n, m, num,
      ans = document.getElementById("answer"),
      submit = document.getElementById("submit"),
      firstNum = document.getElementById("first"),
      secondNum = document.getElementById("second"),
      operation = document.getElementById("sign");

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
