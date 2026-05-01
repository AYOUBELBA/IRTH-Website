window.addEventListener('load', function() {
    setTimeout(() => {
        const loadingscreen = document.getElementById('loading');
        loadingscreen.classList.add('hidden');

        loadingScreen.addEventListener('transitionend', function() {
            loadingScreen.remove();
        });
    }, 500);

});