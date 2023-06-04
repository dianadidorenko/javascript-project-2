// ==================================================================
// Практика 2 - Создайте HTML-страницу, при загрузке которой будет
// отображаться список установленных в системе языков.Предпочтительный
// язык выделите жирным шрифтом.
// ==================================================================

myLang = window.navigator.language;
arr = window.navigator.languages;

for (item of arr) {
//   console.log(item);
    if (item == myLang) {
      var newArray = arr.filter(function (f) {
        return f !== item;
      });
    text.innerHTML = "<b>" + item + "</b>, " + newArray.join(", ");
  }
}
