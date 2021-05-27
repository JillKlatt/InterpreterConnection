

const langAdapter = new LanguageAdapter("http://localhost:3000")
const citAdapter = new CityAdapter("http://localhost:3000")

class InterpreterForm {

    showCreateForm() {
        const btn = document.getElementById('new-int-btn')
        btn.addEventListener('click', this.addCreateForm)
    }

    addCreateForm() {
        const btn = document.getElementById('new-int-btn')
        btn.classList.add("hidden")

        const formContainer = document.getElementById("form-container");
        const form = document.createElement('form');
        form.id = "int-form"
        const nameLabel = document.createElement('label')
        nameLabel.innerText = "Name:"
        const nameInput = document.createElement('input')
        nameInput.id = 'name-input'
        nameInput.type = 'text'
        nameInput.name = 'name'
        const emailLabel = document.createElement('label')
        emailLabel.innerText = "Email:"
        const emailInput = document.createElement('input')
        emailInput.id = 'email-input'
        emailInput.type = 'text'
        emailInput.name = 'email'
        const phoneLabel = document.createElement('label')
        phoneLabel.innerText = "Phone:"
        const phoneInput = document.createElement('input')
        phoneInput.id = 'phone-input'
        phoneInput.type = 'text'
        phoneInput.name = 'phone'
        const notesLabel = document.createElement('label')
        notesLabel.innerText = "Notes:"
        const notesInput = document.createElement('input')
        notesInput.id = 'notes-input'
        notesInput.type = 'text'
        notesInput.name = 'notes'
        const languageLabel = document.createElement('label')
        languageLabel.innerText = "Language:"
        const languageDropdown = document.createElement("select")
        languageDropdown.id = "language-dropdown"

        const cityLabel = document.createElement('label')
        cityLabel.innerText = "City:"

        const cityDropdown = document.createElement("select")
        cityDropdown.id = "city-dropdown"


        const intSubmit = document.createElement('input')
        intSubmit.type = 'submit'
        intSubmit.value = 'Create New Interpreter'
 
        form.append(nameLabel, nameInput, languageLabel)

        formContainer.append(form)

        // debugger
        Language.all.forEach(language => language.addLanguageToDom())
        form.append(cityLabel)
        City.all.forEach(city => city.addCityToDom())

        form.append(emailLabel, emailInput, phoneLabel, phoneInput, notesLabel, notesInput, intSubmit)
        form.addEventListener("submit", handleCreateInterpreter)
        // debugger
    }


     handleInterpreterClick(e) {

        const id = parseInt(e.target.previousElementSibling.dataset.set)
        const li = e.target.previousElementSibling
        // debugger
        const btn = e.target
        const likeBtn = e.target.nextElementSibling
        const action = e.target.dataset.action
            switch(action){ 
                case "delete": 
                console.log("deleting")
                    // debugger
                    // delete this interpreter from backend
                    // debugger
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
                            btn.remove()
                            likeBtn.remove()
          
                        } else {
                            alert(data.message)
                        }})
                    break;

                // case 'edit':
                //     console.log("editing")
                //     let nameInput = document.getElementById('name-input').value
                //     // debugger
                //     // edit and post this interpreter from backend
                //     // debugger
                //     fetch(`http://localhost:3000/api/v1/interpreters/${id}`, {
                //     // console.log(id)
                //     method: "PATCH",
                //     headers: {
                //         "Content-Type": "application/json",
                //         "Accept": "application/json"
                //     },
                //     body: JSON.stringify({
                //         name: nameInput
                //     })
                //     })
                //     .then(resp => {
            
                //         console.log(resp)
                //         return resp.json()
                //     })
                //     .then(data => {
                //         // debugger
                //         console.log(data)
                //         // debugger
                //         // if (data.status === 201){
                //             const i = new Interpreter(data)
                //             // debugger
                //             i.addIntToDom()})
                //     .catch(err => console.error("Catch Error:", err))


                    break;
                
                case 'favorite':
                    // debugger

                    const addId = parseInt(e.target.previousElementSibling.previousElementSibling.dataset.set)

                    const intName = e.target.previousElementSibling.previousElementSibling.children[0].innerText

                    const favoritesContainer = document.getElementById("favorites-container")

                    const ul = document.createElement("ul")
        
                    // debugger
                    let int = Interpreter.all.find(int => int.id === addId)
                    ul.id = int.id
                    ul.innerText = int.name
                    const showMoreBtn = document.createElement("button")
                    showMoreBtn.id = "#show-more-button"
                    showMoreBtn.innerText = "Show Details"
                    showMoreBtn.setAttribute("data-bs-toggle", "modal")
                    showMoreBtn.setAttribute("data-bs-target", "#show-modal")
                    let infoDiv = document.createElement("div")
                    infoDiv.id = "info-div"
                    ul.append(infoDiv, showMoreBtn)
                    favoritesContainer.append(ul)            

                    break;   
        }
    }

}