function daysBetween(a, b) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const start = new Date(a.setHours(0, 0, 0, 0));
  const end = new Date(b.setHours(0, 0, 0, 0));
  return Math.round((end - start) / msPerDay);
}

document.getElementById('calculate').addEventListener('click', () => {
  const mode = document.getElementById('mode').value;
  const dateStr = document.getElementById('date').value;

  const resultEl = document.getElementById('result');
  if (!dateStr) {
    resultEl.textContent = 'Please pick a date.';
    return;
  }

  const picked = new Date(dateStr);
  const today = new Date();

  if (mode === 'since') {
    const d = daysBetween(picked, today);
    resultEl.textContent = d >= 0
      ? `${d} day${d === 1 ? '' : 's'} since ${picked.toDateString()}`
      : `That date is in the future.`;
  } else {
    const d = daysBetween(today, picked);
    resultEl.textContent = d >= 0
      ? `${d} day${d === 1 ? '' : 's'} until ${picked.toDateString()}`
      : `That date has passed.`;
  }
});
