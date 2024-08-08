document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const popupNav = document.getElementById('popup_nav');
    const exit = document.getElementById('exit');

    burger.addEventListener('click', function() {
        popupNav.classList.toggle('active');
    });

    exit.addEventListener('click', function() {
        popupNav.classList.remove('active');
    });

    popupNav.addEventListener('click', function(event) {
        if (event.target === popupNav) {
            popupNav.classList.remove('active');
        }
    });
});
