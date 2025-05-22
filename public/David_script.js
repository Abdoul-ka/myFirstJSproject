// Chargement de l'animation Lottie via JavaScript
const animationContainer = document.getElementById('lottie-background');

lottie.loadAnimation({
  container: document.getElementById('lottie-background'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets9.lottiefiles.com/packages/lf20_j1adxtyb.json'
    // 👉 Animation d'un robot qui scanne un document
    // On peut changer cette URL par une autre animation Lottie
});

//  empêche le zoom par molette sur PC
document.addEventListener('wheel', function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

// Permettrq lie front qu back
function analyserDocument() {
  const file = document.getElementById('upload').files[0];
  const formData = new FormData();
  formData.append('document', file);

  fetch('/analyse', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('resultat').innerText = data.message;
  });
}

