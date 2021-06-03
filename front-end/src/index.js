const interpreterAdapter = new InterpreterAdapter("http://localhost:3000")
const cityAdapter = new CityAdapter("http://localhost:3000")
const languageAdapter = new LanguageAdapter("http://localhost:3000")
const interpreterForm = new InterpreterForm

if (localStorage.favorites === ""){ localStorage.removeItem("favorites")}
let localStoreArr = JSON.parse(localStorage.getItem("favorites"))
let favsArray = (localStoreArr != null) ? localStoreArr : []; 

let displayFavorites = true

let favoriteInterpContainer = document.getElementById("favorite-interpreters-container")
const favoritesContainer = document.getElementById("favorites-container")
const favsButton = document.querySelector('#display-favorites')


document.addEventListener("DOMContentLoaded", () => {
    cityAdapter.getCities();

    languageAdapter.getLanguages();

    interpreterAdapter.getInterpreters();
    interpreterForm.showCreateForm();
    interpreterAdapter.listenforClick();
    listenforFaveClick();
})

function handleCreateInterpreter(e) {
    e.preventDefault()
    const intForm = document.getElementById('int-form')
    intForm.classList.add("hidden")
    const newIntButton = document.getElementById('new-int-btn')
    newIntButton.classList.remove("hidden")
    postNewInterp(e)
}

function postNewInterp(e) {
    let nameInput = document.getElementById('name-input').value
    let languageInput = document.getElementById('language-dropdown').value
    let cityInput = document.getElementById('city-dropdown').value
    let emailInput = document.getElementById("email-input").value
    let phoneInput = document.getElementById("phone-input").value
    let notesInput = document.getElementById("notes-input").value
    const newIntObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: nameInput,
            language_id: languageInput,
            city_id: cityInput,
            email: emailInput,
            phone: phoneInput,
            notes: notesInput
        })
    }
    fetch("http://localhost:3000/api/v1/interpreters", newIntObj)
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 201) {
                const newInt = new Interpreter(data.interpreter)
                newInt.addIntToDom()
                document.getElementById('name-input').value = ""
                document.getElementById('email-input').value = ""
                document.getElementById('phone-input').value = ""
                document.getElementById('notes-input').value = ""

            } else {
                alert(data.errors)
            }
        })
        .catch(
            err => { console.error("Catch Error:", err), alert(err) }
        )
}
favsButton.addEventListener("click", toggleFavesDiv);

function toggleFavesDiv(e) {
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

function populateFavs(favsArray) {
    while (favoritesContainer.firstChild) {
        favoritesContainer.removeChild(favoritesContainer.lastChild)
    }
    for (let i = 0; i < favsArray.length; i++) {
        let int = Interpreter.all.find(int => int.id === favsArray[i])
        let favDiv = document.createElement("div")
        favDiv.innerText = int.name
        favDiv.id = int.id
        const showMoreBtn = document.createElement("button")
        showMoreBtn.setAttribute("class", "btn btn-secondary")
        showMoreBtn.id = "#show-more-button btn-sm"
        showMoreBtn.innerText = "Show Details"
        showMoreBtn.setAttribute("data-bs-toggle", "modal")
        showMoreBtn.setAttribute("data-bs-target", "#show-modal")
        let infoDiv = document.createElement("div")
        infoDiv.id = "info-div"
        favDiv.append(infoDiv, showMoreBtn)
        favoritesContainer.append(favDiv)
    }
}

function listenforFaveClick() {
    const favesContainer = document.getElementById("favorites-container")
        //const showMoreBtn = document.getElementById("show-more-button")
    favesContainer.addEventListener("click", displayPopUp)
}

function displayPopUp(e) {
    // debugger
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





