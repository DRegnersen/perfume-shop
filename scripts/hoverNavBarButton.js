function hoverNavBarButton() {
    const currentPage = window.location.href.split('?')[0];

    const navBarButtons = document.querySelectorAll('.nav-bar__button');

    navBarButtons.forEach(navBarButton => {
        navBarButton.addEventListener("mouseover", function() {
            navBarButton.classList.add('nav-bar__button__active');
        });

        navBarButton.addEventListener("mouseout", function() {
            if (navBarButton.href !== currentPage) {
                navBarButton.classList.remove('nav-bar__button__active');
            }
        });
    });
}

window.addEventListener('load', hoverNavBarButton)