class InterpreterForm {

    showCreateForm() {
        const btn = document.getElementById('new-int-btn')
        btn.addEventListener('click', this.addCreateForm)
    }

    addCreateForm() {
        const formContainer = document.getElementById("form-container");
        const form = document.createElement('form');
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

        const languageDropdown = document.getElementById("language-dropdown")
        // const languageDropdown = document.createElement("language-dropdown")
        // languageInput.type = 'text'
        // languageInput.name = 'language_id'
        const cityLabel = document.createElement('label')
        cityLabel.innerText = "City:"
        // const cityInput = document.createElement('input')
        // cityInput.type = 'text'
        // cityInput.name = 'city_id'
        const cityDropdown = document.getElementById("city-dropdown")
        //const cityDropdown = document.getElementById("city-dropdown")
        // const cityInput = document.createElement('option')
        // // debugger
        // cityInput.value = City.all.forEach(city => city.name)
        // cityInput.innerText = City.all.forEach(city => city.id)

        const intSubmit = document.createElement('input')
        intSubmit.type = 'submit'
        intSubmit.value = 'Create New Interpreter'
        // cityDropdown.append(cityInput)
        form.append(nameLabel, nameInput, languageLabel, languageDropdown, cityLabel, cityDropdown, intSubmit)
        formContainer.append(form)
        form.addEventListener("submit", handleCreateInterpreter)
    }
    
  

     handleDelete(e) {
        const id = e.target.previousElementSibling.dataset.id
        const li = e.target.previousElementSibling
        // debugger
        const btn = e.target
        console.log(e.target)
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
                        btn.remove()
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
}