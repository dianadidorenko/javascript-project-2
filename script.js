// ==================================================================
// Практика 1 - Создайте HTML-страницу, разместите на ней две кнопки.
// По нажатию на первую должно открываться новое окно с адресом
// «https://itstep.org». Размеры нового окна должны быть 640х480.
// По нажатию на вторую кнопку новое окно должно закрываться.
// ==================================================================

// console.log(window.screen);

openButton.onclick = function (e) {
  console.log(e.target);
  newWin = window.open("https://itstep.org", "ITStep", "resizable");
  newWin.resizeTo(640, 480);
  let newWinWidth = newWin.outerWidth,
    newWinHeight = newWin.outerHeight;
  console.log(newWinWidth); // 640px
  console.log(newWinHeight); // 480px
};

closeButton.onclick = function () {
  result = confirm("Ви дійсно бажаєте закрити сторінку?");
  if (result == true) {
    newWin.close();
  } else {
    return;
  }
};

window.addEventListener("beforeunload", (event) => {
  event.returnValue = `Are you sure you want to leave?`;
});