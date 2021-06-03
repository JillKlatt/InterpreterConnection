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

        const nameGroup = document.createElement('div')
        nameGroup.setAttribute("class", "form-group")
        const nameInput = document.createElement('input')
        nameInput.id = 'name-input'
        nameInput.type = 'text'
        nameInput.name = 'name'

        nameGroup.append(nameLabel, nameInput)

        const emailGroup = document.createElement('div')
        emailGroup.setAttribute("class", "form-group")
        const emailLabel = document.createElement('label')
        emailLabel.innerText = "Email:"
        const emailInput = document.createElement('input')
        emailInput.id = 'email-input'
        emailInput.type = 'text'
        emailInput.name = 'email'
        emailGroup.append(emailLabel, emailInput)


        const phoneGroup = document.createElement('div')
        phoneGroup.setAttribute("class", "form-group")
        const phoneLabel = document.createElement('label')
        phoneLabel.innerText = "Phone:"
        const phoneInput = document.createElement('input')
        phoneInput.id = 'phone-input'
        phoneInput.type = 'text'
        phoneInput.name = 'phone'
        phoneGroup.append(phoneLabel, phoneInput)

        const notesGroup = document.createElement('div')
        notesGroup.setAttribute("class", "form-group")
        const notesLabel = document.createElement('label')
        notesLabel.innerText = "Notes:"
        const notesInput = document.createElement('input')
        notesInput.id = 'notes-input'
        notesInput.type = 'text'
        notesInput.name = 'notes'
        notesGroup.append(notesLabel, notesInput)


        const languageLabel = document.createElement('label')
        languageLabel.innerText = "Language:"

        const cityLabel = document.createElement('label')
        cityLabel.innerText = "City:"

        const intSubmit = document.createElement('input')
        intSubmit.type = 'submit'
        intSubmit.value = 'Create New Interpreter'

        form.append(nameGroup, languageLabel)

        formContainer.append(form)

        
        Language.all.forEach(language => language.addLanguageToDom())
        form.append(cityLabel)
        City.all.forEach(city => city.addCityToDom())

        form.append(emailGroup, phoneGroup, notesGroup, intSubmit)
        form.addEventListener("submit", interpreterAdapter.handleCreateInterpreter)
    
    }


    handleInterpreterClick(e) {


        const li = e.target.previousElementSibling
            //  
        const btn = e.target
        const likeBtn = e.target.nextElementSibling
        const action = e.target.dataset.action
        switch (action) {
            case "delete":
                const id = parseInt(e.target.previousElementSibling.dataset.set)
                    // cycles through favorites, looks for the id in localStorage, if it exists, removes it
                if (favesArray.includes(id)) {
                    for (let i = 0; i < favesArray.length; i++) {
                        if (favesArray[i] === id) {
                            favesArray.splice(i, 1);
                        }
                    }
                    
                    if (favesArray != null) {
                        localStorage.setItem("favorites", favesArray)
                    } else {
                        localStorage.setItem("favorites", [])
                    }
                    // find a way to remove fave from dom if deleted and faves are shown
                }
                console.log("deleting")
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
                        if (data.message === "Successfully deleted") {
                            console.log(li)
                            li.remove()
                            btn.remove()
                            likeBtn.remove()

                        } else {
                            alert(data.message)
                        }
                    })
                break;
                
                // case 'edit':
                //     console.log("editing")
                //     let nameInput = document.getElementById('name-input').value
                //     //  
                //     // edit and post this interpreter from backend
                //     //  
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
                //         //  
                //         console.log(data)
                //         //  
                //         // if (data.status === 201){
                //             const i = new Interpreter(data)
                //             //  
                //             i.addIntToDom()})
                //     .catch(err => console.error("Catch Error:", err))


                break;

            case 'favorite':


                const addId = parseInt(e.target.previousElementSibling.previousElementSibling.dataset.set)

                const intName = e.target.previousElementSibling.previousElementSibling.children[0].innerText
                alert(`Added ${intName} to favorites!`)

                const favoritesContainer = document.getElementById("favorites-container")

                const ul = document.createElement("ul")


                let int = Interpreter.all.find(int => int.id === addId)
                ul.id = int.id
                ul.innerText = int.name
                const showMoreBtn = document.createElement("button")
                showMoreBtn.id = "#show-more-button"
                showMoreBtn.setAttribute("class", "btn btn-secondary")
                showMoreBtn.innerText = "Show Details"
                showMoreBtn.setAttribute("data-bs-toggle", "modal")
                showMoreBtn.setAttribute("data-bs-target", "#show-modal")
                let infoDiv = document.createElement("div")
                infoDiv.id = "info-div"
                ul.append(infoDiv, showMoreBtn)
                favoritesContainer.append(ul)
                let intIdToPush = parseInt(int.id)
                if (favesArray.includes(intIdToPush)) {
                    localStorage.setItem("favorites", JSON.stringify(favesArray))
                } else {
                    favesArray.push(intIdToPush)
                    localStorage.setItem("favorites", JSON.stringify(favesArray))
                }
                break;
        }
    }


    removeIntFromFavesDom(id){
        // find int div from fave int container and remove
        //let id = 
        let int = Interpreter.find(int => int.id = id)

        favDiv = document.getElementById(id)
        console.log(favDiv)
    }
}