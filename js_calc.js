window.onload = function() {

  var answer;
  var ans = document.getElementById("answer");

  var submit = document.getElementById("submit");

  submit.addEventListener('click', function (event){
    var firstNum = document.getElementById("first");
    var n = parseInt(firstNum.value, 10);
    var secondNum = document.getElementById("second");
    var m = parseInt(secondNum.value, 10);
    var operation = document.getElementById("sign");
    var num = operation.options[operation.selectedIndex].value;

    event.preventDefault();
    if (num == "1") {
      answer = n + m;
    } else if (num == "2") {
      answer = n - m;
    } else if (num == "3") {
      answer = n * m;
    } else {
      answer = n/m;
    };
    ans.value = answer;
    firstNum.value = answer;
  });
};
