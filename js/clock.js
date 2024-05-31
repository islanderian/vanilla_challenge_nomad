const clock = document.querySelector(".clock h2");

function diplayTime() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const fullTime = `${hours}:${minutes}:${seconds}`;

  clock.innerText = fullTime;
}

diplayTime();
setInterval(diplayTime, 1000);
