const utcTimeElement = document.getElementById("utc-time");

function updateTime() {
  const now = new Date();
  utcTimeElement.textContent = now.toUTCString();
}

updateTime();
setInterval(updateTime, 1000);
