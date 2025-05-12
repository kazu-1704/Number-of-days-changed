function getDaysSinceApril25() {
  const startDate = new Date(2025, 3, 25);
  const now = new Date();
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffTime = todayMidnight - startDate;
  const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return `${daysPassed + 1} day`;
}

function formatHour(date) {
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}

function formatDate(date) {
  const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const dayName = days[date.getDay()];
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dayName}-${dd}/${mm}/${yyyy}`;
}

function updateDisplay() {
  const now = new Date();
  document.getElementById("days").innerText = getDaysSinceApril25();
  document.getElementById("hour").innerText = formatHour(now);
  document.getElementById("date").innerText = formatDate(now);
}

updateDisplay();
setInterval(updateDisplay, 1000);