// Chargement de l'animation Lottie via JavaScript
const animationContainer = document.getElementById('lottie-background');

lottie.loadAnimation({
    container: animationContainer, // L'élément HTML
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets1.lottiefiles.com/packages/lf20_bcywz7mg.json' 
    // 👉 Animation d'un robot qui scanne un document
    // Ont peut changer cette URL par une autre animation Lottie
});
