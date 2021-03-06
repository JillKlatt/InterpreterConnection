const interpreterAdapter = new InterpreterAdapter("http://localhost:3000")
const cityAdapter = new CityAdapter("http://localhost:3000")
const languageAdapter = new LanguageAdapter("http://localhost:3000")
const interpreterForm = new InterpreterForm
const favoritesAdapter = new FavoritesAdapter

if (localStorage.favorites === ""){ localStorage.removeItem("favorites")}
let localStoreArr = JSON.parse(localStorage.getItem("favorites"))
let favesArray = (localStoreArr != null) ? localStoreArr : []; 

let displayFavorites = true

let favoriteInterpContainer = document.getElementById("favorite-interpreters-container")
const favoritesContainer = document.getElementById("favorites-container")
const favesButton = document.querySelector('#display-favorites')


document.addEventListener("DOMContentLoaded", () => {
    cityAdapter.getCities();

    languageAdapter.getLanguages();

    interpreterAdapter.getInterpreters();

    interpreterForm.showCreateForm();
    interpreterAdapter.listenforClick();
    favoritesAdapter.listenforFaveClick();
})

favesButton.addEventListener("click", favoritesAdapter.toggleFavesDiv);



function populateFaves(favesArray) {
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

// 6/4- Modal still throwing error // Removed for assessment
function displayPopUp(e) {
    const id = parseInt(e.target.parentElement.id)
    let int = Interpreter.all.find(int => int.id === id)
    if (e.target = "show-more-button") {
        const favoritesContainer = document.getElementById("favorites-container")
        //console.log("displaying pop up")
        const modal = document.createElement("div")

        modal.className = "modal"
        modal.id = "show-modal"
        modal.tabindex = "-1"
        modal.role = "dialog"
        const modalDialog = document.createElement("div")
        modalDialog.setAttribute("class", "modal-dialog")
        modalDialog.role = "document"
        const modalContent = document.createElement("div")
        modalContent.className = "modal-content"
        const modalHeader = document.createElement('div')
        modalHeader.className = "modal-header"
        const modalTitle = document.createElement("h5")
        modalTitle.className = "modal-title"
        modalTitle.classList.add("popup")
            if (int != null){
        modalTitle.innerText = `${int.name}`}

        const closeBtn = document.createElement("button")
        closeBtn.type = "button"
        closeBtn.id = "close-int-button"
        closeBtn.setAttribute("class", "close")
        closeBtn.setAttribute("data-bs-dismiss", "modal")
        closeBtn.setAttribute("label", "Close")

        const span = document.createElement("span")
        span.setAttribute("aria-hidden", "true")
        span.innerText = `X`

        closeBtn.append(span)
        modalHeader.append(modalTitle, closeBtn)

        const modalBody = document.createElement('div')
        modalBody.className = "modal-body"
                if (int != null){
                    modalBody.innerHTML = `<li class="popup"> ${int.email} </li><li class="popup"> ${int.phone}</li><li class="popup"> ${int.notes}</li>`
                }

        modalContent.append(modalHeader, modalBody)
        modalDialog.append(modalContent)
        modal.append(modalDialog)
        favoritesContainer.append(modal)
    }
}





