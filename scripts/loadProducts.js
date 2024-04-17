async function loadProducts() {
    await delay(1000);

    const loadFrom = Math.floor(Math.random() * 3000);
    const products = await fetchProducts(loadFrom, 40);

    endPreload();

    products.forEach(jsonElement => {
        createProduct(jsonElement.title, jsonElement.thumbnailUrl);
    });
}

async function fetchProducts(loadFrom, productsNumber) {
    try {
        const endpoint = `https://jsonplaceholder.typicode.com/photos?_start=${loadFrom}&_limit=${productsNumber}`;
        const response = await fetch(endpoint);

        if (!response.ok)
            throw new Error('Error ' + response.status);

        return await response.json();

    } catch (error) {
        handleError(error)
    }
}

function endPreload() {
    const productsGrid = document.getElementById('products');
    const preloadDivs = productsGrid.querySelectorAll("div");

    preloadDivs.forEach(div => {
        div.remove();
    });

    productsGrid.style.height = 'auto'
}

function createProduct(title, thumbnailUrl) {
    const product = document.createElement('div');
    product.classList.add('product-card');

    const image = document.createElement('img');
    image.src = thumbnailUrl
    image.alt = title.substring(0, 10);

    const description = document.createElement('p');
    description.textContent = title;

    product.appendChild(image);
    product.appendChild(description);

    const productsDiv = document.getElementById('products');
    productsDiv.appendChild(product);
}

function handleError(error){
    console.error(error)

    const serviceMessage = document.getElementById('serviceMessage')
    serviceMessage.innerText = 'Something went wrong'
}

function delay(delay) {
    return new Promise(handler => setTimeout(handler, delay));
}

window.addEventListener('load', loadProducts);