// ==================================================================
// Практика 4 - Поприветствовать пользователя на нашем сайте, ниже разместить:
// - размер экрана;
// - версия браузера;
// - включены ли Cookie;
// - протокол текущей страницы;
// - кнопка с функционалом закрытия вкладки;
// - кнопка с функционалом обновления текущей вкладки;
// - кнопку с открытием фрейма (фрейм на ваше усмотрение).
// ==================================================================

// alertResult = alert("Добрый");

// Cookie Part Start

cookie = window.navigator.cookieEnabled;

if (cookie == true) {
  cookie = "увімкнені";
} else {
  cookie = "вимкнені";
}

// Cookie Part End

// Reload Part Start

reload = window.location.reload;
if (reload != undefined) {
  reload = "є";
} else {
  reload = "ні";
}

// Reload Part End

// Close Part Start

closePage = window.close;
if (closePage != undefined) {
  closePage = "є";
} else {
  closePage = "ні";
}
// Close Part End

// Frames Part Start

framesWind = window.close;
if (framesWind == Window) {
  framesWind = "є";
} else {
  framesWind = "ні";
}
// Frames Part End

window.navigator.cookieEnabled;
windowsBlock.innerHTML =
  "Розмір Вашого екрану " +
  window.screen.availWidth +
  "px <br> Версія браузера " +
  window.navigator.appVersion +
  "<br> Cookie " +
  cookie +
  "<br> Проткол поточної сторінки " +
  window.location.protocol +
  "<br> Кнопка з функціоналом закриття вкладки " +
  closePage +
  "<br> Кнопка з функціоналом відновлення поточної вкладки " +
  reload +
  "<br> Кнопка с відкриттям фрейма  " +
  framesWind;
