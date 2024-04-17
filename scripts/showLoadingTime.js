(function () {
    function showLoadingTime() {
        const startTime = performance.now();

        window.addEventListener('load', function () {
            const loadingTime = Math.round(performance.now() - startTime);

            document.getElementById('serviceMessage').innerText = 'Page loaded in ' + loadingTime + ' ms';
        });
    }

    showLoadingTime();
})();