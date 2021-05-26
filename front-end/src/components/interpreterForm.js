

const langAdapter = new LanguageAdapter("http://localhost:3000")
const citAdapter = new CityAdapter("http://localhost:3000")

class InterpreterForm {

    showCreateForm() {
        const btn = document.getElementById('new-int-btn')
        // const intForm = document.getElementById("form-container")
        // intForm.innerHTML = ""
        btn.addEventListener('click', this.addCreateForm)
        //btn.classList.add("hidden")
    }

    addCreateForm() {
        const btn = document.getElementById('new-int-btn')
        btn.classList.add("hidden")

        const formContainer = document.getElementById("form-container");
        const form = document.createElement('form');
        form.id = "int-form"
        // form.innerHTML = `<input placehold='name' name='name' label='name' type='text' /><br><input placehold='email' name= 'email' type='text' /><br><input value='Add New Interpreter' type='submit' />`
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
        // const languageInput = document.createElement('input')

        //const languageDropdown = document.getElementById("language-dropdown")
        // const languageDropdown = document.createElement("select")
        // languageDropdown.id = "language-dropdown"
        // languageDropdown.name = "language"
        const languageDropdown = document.createElement("select")
        languageDropdown.id = "language-dropdown"
        // langAdapter.getLanguages()
        // debugger

        // languageInput.type = 'text'
        // languageInput.name = 'language_id'
        const cityLabel = document.createElement('label')
        cityLabel.innerText = "City:"
        // const cityInput = document.createElement('input')
        // cityInput.type = 'text'
        // cityInput.name = 'city_id'
        // const cityDropdown = document.getElementById("city-dropdown")
        const cityDropdown = document.createElement("select")
        cityDropdown.id = "city-dropdown"
        // cityDropdown.name = "city"
        // citAdapter.getCities()
        // debugger


        //const cityDropdown = document.getElementById("city-dropdown")
        // const cityInput = document.createElement('option')
        // // debugger
        // cityInput.value = City.all.forEach(city => city.name)
        // cityInput.innerText = City.all.forEach(city => city.id)

        const intSubmit = document.createElement('input')
        intSubmit.type = 'submit'
        intSubmit.value = 'Create New Interpreter'
        // cityDropdown.append(cityInput)
        form.append(nameLabel, nameInput, languageLabel ) //cityDropdown,languageDropdown, 
        // allLang.forEach(language => language.addLanguageToDom())
        // City.all.forEach(city => city.addCityToDom())
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
        // const formContainer = document.getElementById("form-container");
        // formContainer.classList.add("hidden")
        // const newIntBtn = document.getElementById('new-int-btn')
        // newIntBtn.classList.remove("hidden")

        const id = parseInt(e.target.previousElementSibling.dataset.set)
        const li = e.target.previousElementSibling
        // debugger
        const btn = e.target
        const likeBtn = e.target.nextElementSibling
        const action = e.target.dataset.action
        // console.log(e.target)
            switch(action){ 
           // if (e.target.dataset.action == 'delete'){
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
                            // const toRemove = document.getElementById(`data-id=${id}`)
                            // console.log(toRemove)
                            // e.target.previousElementSibling.dataset.remove()
                            // const interpreterContainer = document.getElementById("interpreters-container")
                            // interpreterContainer.getInterpreters
        
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

                    // const intName = Interpreter.all.find(int => int.id === addId).name
                    const intName = e.target.previousElementSibling.previousElementSibling.children[0].innerText
                    

                    // Add conditional to see if favorite exists? Or I guess just toggle between favorite and not?
                    // debugger

                    const favoritesContainer = document.getElementById("favorites-container")
                    const ul = document.createElement("ul")
        
                    // debugger
                    // let int = Interpreter.all.find(int => int.id === addId)
                    // ul.id = int.id
                    // ul.innerText = int.name
                    // let infoDiv = document.createElement("div")
                    // infoDiv.id = "info-div"
                    // const email = document.createElement("li")
                    // email.innerText = int.email
                    // const phone = document.createElement("li")
                    // phone.innerText = int.phone
                    // const notes = document.createElement("li")
                    // notes.innerText = int.notes
                    // infoDiv.append(email, phone, notes)
                    // infoDiv.classList.add("hidden")
                    // ul.appendChild(infoDiv)
                    // favoritesContainer.append(ul)
                    // console.log(`Adding ${intName} to favorites`)
                    // alert(`Added ${intName} to favorites`)
                    //     // debugger
                    // favorites.push(addId)
                    // // debugger                    
                    // localStorage.setItem("favorites", JSON.stringify(favorites))
              

                    break;   
                
        
                // .catch(err => console.error(err))
        }
    }

    // handleFavorite(e) {
    //     console.log(e.target)
    // }

    // handleCreateInterpreter(e) {
    //     // debugger
    //     e.preventDefault()
    //     // debugger
    //     let nameInput = document.getElementById('name-input').value
    //     let languageInput = e.target.children[3].value
    //     let cityInput = e.target.children[5].value
    
    
    //     // Acquired the input of our user, now send it to the backend
    //     fetch("http://localhost:3000/api/v1/interpreters", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name: nameInput,
    //             language_id: languageInput,
    //             city_id: cityInput
    //         })   
    //     })
    //     .then(resp => resp.json())
        
    //     .then(data => {
    //         // debugger
    //         console.log(data)
    //         // debugger
    //         // if (data.status === 201){
    //             const i = new Interpreter(data)
    //             // debugger
    //             i.addIntToDom()
    //         document.getElementById('name-input').value = ""
    //     })
    //     .catch(err => console.error("Catch Error:", err))
    // }
}