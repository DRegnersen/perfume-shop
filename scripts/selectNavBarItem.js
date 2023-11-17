function selectNavBarItem() {
    const currentPage = window.location.href.split('?')[0];

    const navBarItems = document.querySelectorAll('.nav-bar__item');

    navBarItems.forEach(navBarItem => {
        if (navBarItem.href === currentPage) {
            navBarItem.classList.add('nav-bar__item__active');
        } else {
            navBarItem.classList.remove('nav-bar__item__active');
        }
    });
}

window.addEventListener('load', selectNavBarItem)