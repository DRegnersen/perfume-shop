function addNewFavorite() {
    const newFavoriteTag = document.getElementById('newFavoriteTag').value;
    const favoritesItem = document.createElement('li');

    const textNode = document.createTextNode(newFavoriteTag);
    favoritesItem.appendChild(textNode);

    const removeButton = createRemoveButton(newFavoriteTag, favoritesItem)
    favoritesItem.appendChild(removeButton)

    const favoritesList = document.getElementById('favoritesList');
    favoritesList.appendChild(favoritesItem);

    document.getElementById('newFavoriteTag').value = ''; // clear the input field

    let favoritesItems = localStorage.getItem('favoritesItems');

    if (favoritesItems) {
        favoritesItems = JSON.parse(favoritesItems);
        favoritesItems.push(newFavoriteTag);
    } else {
        favoritesItems = [newFavoriteTag];
    }

    localStorage.setItem('favoritesItems', JSON.stringify(favoritesItems));
}

function createRemoveButton(value, listItem) {
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '✕';
    removeButton.onclick = function () {
        listItem.remove();
        removeFavorite(value);
    };

    return removeButton
}

function removeFavorite(favoriteItem) {
    let favoritesItems = localStorage.getItem('favoritesItems');

    if (favoritesItems) {
        favoritesItems = JSON.parse(favoritesItems);

        const index = favoritesItems.indexOf(favoriteItem);

        if (index > -1) {
            favoritesItems.splice(index, 1);
            localStorage.setItem('favoritesItems', JSON.stringify(favoritesItems));
        }
    }
}

window.onload = function () {
    let favoritesItems = localStorage.getItem('favoritesItems');

    if (favoritesItems) {
        const favoritesList = document.getElementById('favoritesList');
        favoritesItems = JSON.parse(favoritesItems);

        favoritesItems.forEach(function (item) {
            const favoritesItem = document.createElement('li');

            const textNode = document.createTextNode(item);
            favoritesItem.appendChild(textNode);

            const removeButton = createRemoveButton(item, favoritesItem)
            favoritesItem.appendChild(removeButton);

            favoritesList.appendChild(favoritesItem);
        });
    }
}