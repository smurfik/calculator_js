window.onload = function() {

  var firstNum = document.getElementById("first").value;
  var secondNum = document.getElementById("second").value;

  var submit = document.getElementById("submit");

  submit.addEventListener('click', function (event){
    var firstNum = document.getElementById("first").value;
    var n = parseInt(firstNum, 10);
    var secondNum = document.getElementById("second").value;
    var m = parseInt(secondNum, 10);
    var operation = document.getElementById("sign");
    var num = operation.options[operation.selectedIndex].value;

    event.preventDefault();
    if (num == "1") {
      console.log(n + m);
    } else if (num == "2") {
      console.log(n - m);
    } else if (num == "3") {
      console.log(n * m);
    } else {
      console.log(n/4);
    };
  });
};
