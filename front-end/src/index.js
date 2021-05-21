const interpreterAdapter = new InterpreterAdapter("http://localhost:3000")
const cityAdapter = new CityAdapter("http://localhost:3000")
const languageAdapter = new LanguageAdapter("http://localhost:3000")
const interpreterForm = new InterpreterForm

document.addEventListener("DOMContentLoaded", () => {
    interpreterAdapter.getInterpreters();
    cityAdapter.getCities();
    languageAdapter.getLanguages();
    interpreterForm.addCreateForm();
    listenforDelete();
})

// function addCreateForm() {
//     const formContainer = document.getElementById("form-container");
//     const form = document.createElement('form');
//     // form.innerHTML = `<input placehold='name' name='name' label='name' type='text' /><br><input placehold='email' name= 'email' type='text' /><br><input value='Add New Interpreter' type='submit' />`
//     const nameLabel = document.createElement('label')
//     nameLabel.innerText = "Name:"
//     const nameInput = document.createElement('input')
//     nameInput.type = 'text'
//     nameInput.name = 'name'
//     const languageLabel = document.createElement('label')
//     languageLabel.innerText = "Language:"
//     const languageInput = document.createElement('input')
//     languageInput.type = 'text'
//     languageInput.name = 'language_id'
//     const cityLabel = document.createElement('label')
//     cityLabel.innerText = "City:"
//     const cityInput = document.createElement('input')
//     cityInput.type = 'text'
//     cityInput.name = 'city_id'
//     const intSubmit = document.createElement('input')
//     intSubmit.type = 'submit'
//     intSubmit.value = 'Create New Interpreter'
//     form.append(nameLabel, nameInput, languageLabel, languageInput, cityLabel, cityInput, intSubmit)
//     formContainer.append(form)
//     form.addEventListener("submit", handleCreateInterpreter)
// }

// function showCreateForm() {
//     btn = document.getElementById('new-int-btn')
//     btn.addEventListener('click', addCreateForm)
// }

function handleCreateInterpreter(e) {
    e.preventDefault()
    let nameInput = e.target.children[1].value
    let languageInput = e.target.children[3].value
    let cityInput = e.target.children[5].value
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
        // } else {
        //     alert(data.errors)
        // }
        nameInput = ""
        languageInput = ""
        cityInput = ""
    })
    .catch(err => console.error("I'm in the catch!", err))
}
    // debugger


// function addIntToDom(data) {
//     const interpreterContainer = document.getElementById('interpreters-container');
//     interpreterContainer.innerHTML += `<li>${data.name} -${data.language.name}, in ${data.city.name}</li>`
// }

function listenforDelete() {
    const interpreterContainer = document.getElementById("interpreters-container")
    interpreterContainer.addEventListener('click', handleDelete)
}

function handleDelete(e) {
    const id = e.target.previousElementSibling.dataset.id
    const li = e.target.previousElementSibling
        if (e.target.dataset.action == 'delete'){
            // debugger
            // delete this interpreter from backend
            fetch(`http://localhost:3000/api/v1/interpreters/${id}`, {
            // console.log(id)
            method: "DELETE",
            })
            .then(resp => {
     
                console.log(resp)
                return resp.json()
            })
            .then(data => {
                // debugger
                // if (data.status === 204) {
                    // e.target.previousElementSibling.dataset.remove
                // }
                // console.log(data)
                // debugger
                if (data.message === "Successfully deleted"){
                    console.log(li)
                    li.remove()
                    // const toRemove = document.getElementById(`data-id=${id}`)
                    // console.log(toRemove)
                    // e.target.previousElementSibling.dataset.remove()
                    // const interpreterContainer = document.getElementById("interpreters-container")
                    // interpreterContainer.getInterpreters

                } else {
                    alert(data.message)
                }

            })
    
            // .catch(err => console.error(err))
    }
}