// ==============================================================================
// Практика 2 - Создайте HTML-страницу, разместите на ней кнопку. По
// нажатию на кнопку должно выводиться количество записей в истории браузера.
// Проверьте работоспособность кнопки, переходя на страницу с различными
// параметрами(exc3.html ? page = 1, exc3.html ? page = 2, exc3.html ? page = 3).
// ==============================================================================

console.log(window.history);

window.history.replaceState({ record: "0" }, "page 0", "?page=0");

window.history.pushState({ record: "1" }, "page 1", "?page=1");
window.history.pushState({ record: "2" }, "page 2", "?page=2");
window.history.pushState({ record: "3" }, "page 3", "?page=3");

historyButton.addEventListener("click", () => {
  text.innerText =
    window.history.length + " - кількість записів в історії браузеру";
  text.style.border = "5px solid rgba(251, 106, 89, 0.5)";
  text.style.padding = "5px";
});
