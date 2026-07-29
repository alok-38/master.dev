const timeEl = document.getElementById('time');
const now = new Date();

const time = now.toString().match(/\d{2}:\d{2}/)[0];

timeEl.textContent = time;