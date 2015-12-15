window.onload = function() {
  var keys = document.getElementById("keypad"),
      buttons = document.getElementsByClassName("btn"),
      ans = document.getElementById("ans"),
      i, button;

  for ( i = 0; i < buttons.length; i++ ) {
    button = buttons[i];
    button.addEventListener('click', function () {
      ans.value = this.innerHTML;
    });
  }
};
