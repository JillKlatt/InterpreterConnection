const interpreterAdapter = new InterpreterAdapter("http://localhost:3000")
const cityAdapter = new CityAdapter("http://localhost:3000")
const languageAdapter = new LanguageAdapter("http://localhost:3000")
const interpreterForm = new InterpreterForm
let favorites = JSON.parse(localStorage.getItem("favorites")) || []
//let favorites = []
// debugger
let displayingFavorites = true
let displayingInfo = false

document.addEventListener("DOMContentLoaded", () => {
    console.log(`Favorites Variable Array = ${favorites}`)
    cityAdapter.getCities();

    languageAdapter.getLanguages(); 
    
    interpreterAdapter.getInterpreters();
    interpreterForm.showCreateForm();
    interpreterAdapter.listenforClick();
    listenForFavorites();
    listenforFaveClick();
})


// 5/28- Move to Interpreter Adapter
function handleCreateInterpreter(e) {
    // debugger
    e.preventDefault()
    // debugger
    let nameInput = document.getElementById('name-input').value
    let languageInput = e.target.children[3].value
    let cityInput = e.target.children[5].value
    let emailInput = document.getElementById("email-input").value
    let phoneInput = document.getElementById("phone-input").value
    let notesInput = document.getElementById("notes-input").value
    // debugger


    // Acquired the input of our user, now send it to the backend
    fetch("http://localhost:3000/api/v1/interpreters", {
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
    })
    .then(resp => resp.json())
    
    .then(data => {
        // debugger
        console.log(data)
        // debugger
        // if (data.status === 201){
            const i = new Interpreter(data)
            // debugger
            i.addIntToDom()
        document.getElementById('name-input').value = ""
    })
    .catch(err => console.error("Catch Error:", err))
}


///// CURRENTLY NOT WORKING ALL THE WAY
function listenForFavorites() {
    document.getElementById("display-favorites").addEventListener("click", displayFavoritesContainer)
}

function displayFavoritesContainer(e) {
    const btn = e.target
    const favoritesContainer = document.getElementById("favorite-interpreters-container")
    // debugger
    switch (displayingFavorites) {
        case true:
            console.log("Showing Favorites")
            btn.innerText = "Hide My Faves"
            // if (favorites == [])
            //}
            favorites.forEach(fave => displayFavorites(fave))
            favoritesContainer.classList.remove("hidden")
            displayingFavorites = false
            break;
        case false:
            btn.innerText = "Show My Faves"
            favoritesContainer.classList.add("hidden")
            displayingFavorites = true
            break;
        // debugger
    }
}

function displayFavorites(fave){
        const favoritesContainer = document.getElementById("favorites-container")
        // while (favoritesContainer.firstChild){
        //     favoritesContainer.removeChild(favoritesContainer.lastChild)
        // }
        const div = document.createElement("div")

        let int = Interpreter.all.find(int => int.id === fave)
        // debugger
        div.id = int.id
        div.innerText = int.name
        const showMoreBtn = document.createElement("button")
        showMoreBtn.id = "#show-more-button"
        showMoreBtn.innerText = "Show Details"
        showMoreBtn.setAttribute("data-bs-toggle", "modal")
        showMoreBtn.setAttribute("data-bs-target", "#show-modal")
        let infoDiv = document.createElement("div")
        infoDiv.id = "info-div"
        div.append(infoDiv, showMoreBtn)
        favoritesContainer.append(div)
// debugger    
    // const favoritesContainer = document.getElementById("favorites-container")
    // // favoritesContainer.clear
    // const ul = document.createElement("ul")
    // let int = Interpreter.all.find(int => int.id === fave)
    // ul.id = int.id
    // ul.innerText = int.name
    // let infoDiv = document.createElement("div")
    // infoDiv.id = "info-div"
    // const email = document.createElement("ul")
    // email.innerText = int.email
    // const phone = document.createElement("ul")
    // phone.innerText = int.phone
    // const notes = document.createElement("ul")
    // notes.innerText = int.notes
    // infoDiv.append(email, phone, notes)
    // infoDiv.classList.add("hidden")
    // ul.appendChild(infoDiv)
    // favoritesContainer.append(ul)
}

function listenforFaveClick() {
    const ul = document.getElementById("favorites-container")
    const showMoreBtn = document.getElementById("show-more-button")
    // favorites.forEach(fave => displayFavorites(fave))
    //right here: we don't have any favorites to display
    // debugger
    ul.addEventListener("click", displayPopUp)
}

function displayPopUp(e) {
    // debugger
    const id = parseInt(e.target.parentElement.id)
    // debugger
    // console.log(e.target.previousElementSibling.previousElementSibling)
    let int = Interpreter.all.find(int => int.id = id)
    if (e.target = "show-more-button"){
    const favoritesContainer = document.getElementById("favorites-container")
    console.log("displaying pop up")
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
    modalTitle.innerText = `${int.name}`

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
    modalBody.innerHTML = `<li> ${int.email} </li>`

    
    modalContent.append(modalHeader, modalBody)
    modalDialog.append(modalContent)
    modal.append(modalDialog)
    favoritesContainer.append(modal)
    // debugger
    }
}

// function displayIntInfo(e){
//     const btn = e.target
//     let infoDiv = document.getElementById("info-div")
//     // Still appending this info every time

//    //e.target.append(infoDiv)
//     //console.log(int)

//     switch (displayingInfo){
//         case true: 
//         console.log("showing info")
//             infoDiv.classList.remove("hidden")
//             displayingInfo = false
//             break;

//         case false:
//             console.log("hiding info")
//             // let infoDisplay = document.getElementById("info-div")
//             // infoDisplay.classList.add("hidden")
//             // debugger
//             infoDiv.classList.add("hidden")
//             displayingInfo = true
//             break;
//     }


    