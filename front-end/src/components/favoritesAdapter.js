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

    populateFaves(favesArray) {
    while (favoritesContainer.firstChild) {
        favoritesContainer.removeChild(favoritesContainer.lastChild)
    }
    for (let i = 0; i < favesArray.length; i++) {
        let int = Interpreter.all.find(int => int.id === favesArray[i])
        let favDiv = document.createElement("div")
        favDiv.innerText = int.name
        favDiv.id = int.id
        const ul = document.createElement("ul")
        ul.innerHTML = 
            `<li>Phone: ${int.phone}</li>
            <li>Email: ${int.email}</li>
            <li>Notes: ${int.notes}</li>`
        // 6/4- Modal still throwing error // Removed for assessment (sub in ul of info)
        // const showMoreBtn = document.createElement("button")
        // showMoreBtn.setAttribute("class", "btn btn-secondary")
        // showMoreBtn.id = "#show-more-button btn-sm"
        // showMoreBtn.innerText = "Show Details"
        // showMoreBtn.setAttribute("data-bs-toggle", "modal")
        // showMoreBtn.setAttribute("data-bs-target", "#show-modal")
        let infoDiv = document.createElement("div")
        infoDiv.id = "info-div"
        favDiv.append(infoDiv, ul)//, showMoreBtn)
        favoritesContainer.append(favDiv)
    }
}

    
    listenforFaveClick() {
        const favesContainer = document.getElementById("favorites-container")
            //const showMoreBtn = document.getElementById("show-more-button")
        favesContainer.addEventListener("click", displayPopUp)
    }
}