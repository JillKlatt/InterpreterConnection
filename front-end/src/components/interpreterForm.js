

const langAdapter = new LanguageAdapter("http://localhost:3000")
const citAdapter = new CityAdapter("http://localhost:3000")
const allLang = Language.all

class InterpreterForm {

    showCreateForm() {
        const btn = document.getElementById('new-int-btn')
        // const intForm = document.getElementById("form-container")
        // intForm.innerHTML = ""
        btn.addEventListener('click', this.addCreateForm)
    }

    addCreateForm() {
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
        const languageLabel = document.createElement('label')
        languageLabel.innerText = "Language:"
        // const languageInput = document.createElement('input')

        //const languageDropdown = document.getElementById("language-dropdown")
        const languageDropdown = document.createElement("select")
        languageDropdown.id = "language-dropdown"
        languageDropdown.name = "language"
        langAdapter.getLanguages()
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
        form.append(nameLabel, nameInput, languageLabel, languageDropdown, cityLabel, ) //cityDropdown,
        // allLang.forEach(language => language.addLanguageToDom())
        // City.all.forEach(city => city.addCityToDom())
        formContainer.append(form)
        form.addEventListener("submit", handleCreateInterpreter)
        // debugger
        City.all.forEach(city => city.addCityToDom())
        form.append(intSubmit)
    }

    fillCities() {
        City.all.forEach(city => city.addCityToDom())
    }


     handleInterpreterClick(e) {
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

                    break;

                // case 'favorite':
                //     console.log("favorite")
                //     break;

                //     }    
                
        
                // .catch(err => console.error(err))
        }
    }

    // handleFavorite(e) {
    //     console.log(e.target)
    // }
}