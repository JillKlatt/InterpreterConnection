const interpreterAdapter = new InterpreterAdapter("http://localhost:3000")
const cityAdapter = new CityAdapter("http://localhost:3000")
const languageAdapter = new LanguageAdapter("http://localhost:3000")
const interpreterForm = new InterpreterForm
let favorites = parseInt(localStorage.getItem("favorites")) || []
let displayingFavorites = true
let displayingInfo = false

document.addEventListener("DOMContentLoaded", () => {
    cityAdapter.getCities();

    languageAdapter.getLanguages(); 
    
    interpreterAdapter.getInterpreters();
    interpreterForm.showCreateForm();
    interpreterAdapter.listenforClick();
    listenForFavorites();
    listenforFaveClick();
})



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

// function flipFavorites() {
//     const btn = document.getElementById("display-favorites")
//     const favoritesContainer = document.getElementById("favorite-interpreters-container")

//     btn.addEventListener("click", () => {
//         switch(displayFavorites)
//     })
// }

///// CURRENTLY NOT WORKING ALL THE WAY
function listenForFavorites() {
    //favorites.forEach(fave => displayFavorites(fave))
    document.getElementById("display-favorites").addEventListener("click", displayFavoritesContainer)
}

function displayFavoritesContainer(e) {
    const btn = e.target
    const favoritesContainer = document.getElementById("favorite-interpreters-container")
    // debugger
    favorites.forEach(fave => displayFavorites(fave))
    switch (displayingFavorites) {
        case true:
            console.log("Showing Favorites")
            btn.innerText = "Hide My Faves"

            favoritesContainer.classList.remove("hidden")
            displayingFavorites = false
            // favorites.forEach(fave => displayFavorites(fave))
            break;
        case false:
            btn.innerText = "Show My Faves"
            favoritesContainer.classList.add("hidden")
            displayingFavorites = true
            break;
        // debugger
        //ul.innerText = favoritesArray
        // favoritesContainer.append(ul)
    }
}

// function displayFavorites(fave){
//     // const favoritesContainer = document.getElementById("favorites-container")
//     // // favoritesContainer.clear
//     // const ul = document.createElement("ul")
//     // let int = Interpreter.all.find(int => int.id === fave)
//     // ul.id = int.id
//     // ul.innerText = int.name
//     // let infoDiv = document.createElement("div")
//     // infoDiv.id = "info-div"
//     // const email = document.createElement("ul")
//     // email.innerText = int.email
//     // const phone = document.createElement("ul")
//     // phone.innerText = int.phone
//     // const notes = document.createElement("ul")
//     // notes.innerText = int.notes
//     // infoDiv.append(email, phone, notes)
//     // infoDiv.classList.add("hidden")
//     // ul.appendChild(infoDiv)
//     // favoritesContainer.append(ul)
// }

function listenforFaveClick() {
    const ul = document.getElementById("favorites-container")
    // favorites.forEach(fave => displayFavorites(fave))
    //right here: we don't have any favorites to display
    // debugger
    ul.addEventListener("click", displayIntInfo)
}

function displayIntInfo(e){
    const btn = e.target
    let infoDiv = document.getElementById("info-div")
    // Still appending this info every time

   //e.target.append(infoDiv)
    //console.log(int)

    switch (displayingInfo){
        case true: 
        console.log("showing info")
            infoDiv.classList.remove("hidden")
            displayingInfo = false
            break;

        case false:
            console.log("hiding info")
            // let infoDisplay = document.getElementById("info-div")
            // infoDisplay.classList.add("hidden")
            // debugger
            infoDiv.classList.add("hidden")
            displayingInfo = true
            break;
    }
}

    