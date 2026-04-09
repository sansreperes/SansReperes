const statusText = document.getElementById('status-text');
const segments = [
  document.querySelector('.loader .s1'),
  document.querySelector('.loader .s2'),
  document.querySelector('.loader .s3'),
  document.querySelector('.loader .s4'),
  document.querySelector('.loader .s5'),
  document.querySelector('.loader .s6'),
  document.querySelector('.loader .s7')
];

const messages = [
  'Transfert des<br>documents en cours',
  'Vérification des<br>pièces justificatives',
  'Analyse du<br>dossier en cours'
];

let litCount = 1;
let messageIndex = 0;

function paintLoader() {
  segments.forEach((seg, index) => {
    seg.classList.toggle('on', index < litCount);
  });

  litCount += 1;
  if (litCount > segments.length) {
    litCount = 1;
  }
}

paintLoader();
setInterval(paintLoader, 620);

setInterval(() => {
  messageIndex = (messageIndex + 1) % messages.length;
  statusText.innerHTML = messages[messageIndex];
}, 3720);
