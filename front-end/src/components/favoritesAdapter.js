class FavoritesAdapter {

    toggleFavesDiv(e) {
        switch (displayFavorites) {
            case true:
                console.log("Showing Favorites")
                favsButton.innerText = "Hide My Faves"
                populateFavs(favsArray)
                favoriteInterpContainer.classList.remove("hidden")
                displayFavorites = false
                break;
            case false:
                favsButton.innerText = "Show My Faves"
                favoriteInterpContainer.classList.add("hidden")
                displayFavorites = true
                break;
        }
    }


}