const clockWrap = document.querySelector(".js-clock"),
  clickTitle = clockWrap.querySelector("h1");

function getTime() {
  const date = new Date();
  const hor  = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  clickTitle.innerText = `${hor < 10 ? `0${hor}` : hor} : ${min < 10 ? `0${min}` : min} : ${sec <10 ? `0${sec}` : sec}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
