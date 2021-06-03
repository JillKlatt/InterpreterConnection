class FavoritesAdapter {

    toggleFavesDiv(e) {
        switch (displayFavorites) {
            case true:
                console.log("Showing Favorites")
                favesButton.innerText = "Hide My Faves"
                populateFaves(favesArray)
                favoriteInterpContainer.classList.remove("hidden")
                displayFavorites = false
                break;
            case false:
                favesButton.innerText = "Show My Faves"
                favoriteInterpContainer.classList.add("hidden")
                displayFavorites = true
                break;
        }
    }
    listenforFaveClick() {
        const favesContainer = document.getElementById("favorites-container")
            //const showMoreBtn = document.getElementById("show-more-button")
        favesContainer.addEventListener("click", displayPopUp)
    }
}