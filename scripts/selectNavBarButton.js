function selectNavBarButton() {
    const currentPage = window.location.href.split('?')[0];

    const navBarButtons = document.querySelectorAll('.nav-bar__button');

    navBarButtons.forEach(navBarButton => {
        if (navBarButton.href === currentPage) {
            navBarButton.classList.add('nav-bar__button__active');
        } else {
            navBarButton.classList.remove('nav-bar__button__active');
        }
    });
}

window.addEventListener('load', selectNavBarButton)