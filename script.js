const hourDiv = document.querySelector(".hour");
const minDiv = document.querySelector(".min");
const secDiv = document.querySelector(".sec");

const tick = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (hours < 10) {
    hourDiv.innerHTML = `0${hours}&nbsp;`;
  } else {
    hourDiv.innerHTML = `${hours}&nbsp;`;
  }
  if (minutes < 10) {
    minDiv.innerHTML = `: &nbsp;0${minutes}&nbsp;`;
  } else {
    minDiv.innerHTML = `: &nbsp;${minutes}&nbsp; `;
  }

  if (seconds < 10) {
    secDiv.innerHTML = `: &nbsp;0${seconds}`;
  } else {
    secDiv.innerHTML = `: &nbsp;${seconds}`;
  }
};
setInterval(tick, 1000);
