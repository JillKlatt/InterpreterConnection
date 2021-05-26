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
})



function handleCreateInterpreter(e) {
    // debugger
    e.preventDefault()
    // debugger
    let nameInput = document.getElementById('name-input').value
    let languageInput = e.target.children[3].value
    let cityInput = e.target.children[5].value


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
            city_id: cityInput
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
    