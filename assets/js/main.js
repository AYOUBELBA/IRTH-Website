// Loading Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        const loadingscreen = document.getElementById('loading');
        loadingscreen.classList.add('hidden');

        loadingScreen.addEventListener('transitionend', function() {
            loadingScreen.remove();
        });
    }, 500);

});
//Nav bar
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.nav');

  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});