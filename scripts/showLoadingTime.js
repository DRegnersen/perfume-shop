function showLoadingTime() {
    const loadingTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

    document.getElementById('loadingTime').innerText = 'Page loaded in ' + loadingTime + ' ms'
}

window.addEventListener('load', showLoadingTime)