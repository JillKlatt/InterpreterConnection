const interpreterAdapter = new InterpreterAdapter("http://localhost:3000")
const cityAdapter = new CityAdapter("http://localhost:3000")
const languageAdapter = new LanguageAdapter("http://localhost:3000")
const interpreterForm = new InterpreterForm
let favorites = parseInt(localStorage.getItem("favorites")) || []

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



function listenForFavorites() {
    document.getElementById("display-favorites").addEventListener("click", displayFavoritesContainer)
}

function displayFavoritesContainer(e) {
    const btn = e.target

    btn.innerText = "Hide My Faves"
    const favoritesContainer = document.getElementById("favorite-interpreters-container")
    // debugger
    favoritesContainer.classList.remove("hidden")
    // debugger
    //let favoritesArray = 
    favorites.forEach(fave => displayFavorites(fave))
    // debugger
    //ul.innerText = favoritesArray
    // favoritesContainer.append(ul)
}

function displayFavorites(fave){
    const ul = document.createElement("ul")
    let int = Interpreter.all.find(int => int.id === fave)
    ul.id = int.id
    ul.innerText += int.name
    const favoritesContainer = document.getElementById("favorites-container")
    favoritesContainer.append(ul)
}

function listenforFaveClick() {
    const ul = document.getElementById("favorites-container")
    ul.addEventListener("click", displayIntInfo)
    //.addEventListener("click", displayFavoritesContainer)
}

function displayIntInfo(e){
    // console.log(e.target)
    // debugger
    let int = Interpreter.all.find(int => int.id === parseInt(e.target.id))
    const li = document.createElement("li")
    li.innerText += int.email
    //const int = document.createElement("li")
    e.target.append(li)
    console.log(int)
}

    