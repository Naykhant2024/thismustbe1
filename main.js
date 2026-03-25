const qs = (selector) => document.querySelector(selector);
const stagePlay = qs('#stage-play');
const stageLetter1 = qs('#stage-letter1');
const stageDenied = qs('#stage-denied');
const stageCelebrate = qs('#stage-celebrate');
const dropZone = qs('#dropZone');
const ball = qs('#ball');
const playHint = qs('#playHint');
const accept1 = qs('#accept1');
const deny1 = qs('#deny1');
const accept2 = qs('#accept2');
const backBtn = qs('#backBtn');
const backToPlay1 = qs('#backToPlay1');
const backToPlay2 = qs('#backToPlay2');
const backToPlay3 = qs('#backToPlay3');
const restartBtn = qs('#restart');

function showScreen(screen) {
  [stagePlay, stageLetter1, stageDenied, stageCelebrate].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

ball.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', 'heart');
  requestAnimationFrame(() => ball.classList.add('dragging'));
});
ball.addEventListener('dragend', () => ball.classList.remove('dragging'));

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = '#ffbfd6';
});
dropZone.addEventListener('dragleave', () => {
  dropZone.style.backgroundColor = '#ffe4ee';
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = '#ffe4ee';
  const data = e.dataTransfer.getData('text/plain');
  if (data === 'heart') {
    playHint.textContent = 'Great! Letter unlocked ';
    setTimeout(() => showScreen(stageLetter1), 600);
  }
});

accept1.addEventListener('click', () => {
  showScreen(stageCelebrate);
});

deny1.addEventListener('click', () => {
  showScreen(stageDenied);
});

accept2.addEventListener('click', () => {
  showScreen(stageCelebrate);
});

backToPlay1.addEventListener('click', () => {
  showScreen(stagePlay);
  playHint.textContent = 'Drag the ❤️ ball into the pink circle to continue.';
});

backToPlay2.addEventListener('click', () => {
  showScreen(stagePlay);
  playHint.textContent = 'Drag the ❤️ ball into the pink circle to continue.';
});

backToPlay3.addEventListener('click', () => {
  showScreen(stagePlay);
  playHint.textContent = 'Drag the ❤️ ball into the pink circle to continue.';
});

backBtn.addEventListener('click', () => {
  showScreen(stagePlay);
  playHint.textContent = 'Drag the ❤️ ball into the pink circle to continue.';
});

restartBtn.addEventListener('click', () => {
  showScreen(stagePlay);
  playHint.textContent = 'Drag the  ball into the pink circle to continue.';
});
