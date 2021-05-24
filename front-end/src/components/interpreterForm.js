class InterpreterForm {

    addCreateForm() {
        const formContainer = document.getElementById("form-container");
        const form = document.createElement('form');
        // form.innerHTML = `<input placehold='name' name='name' label='name' type='text' /><br><input placehold='email' name= 'email' type='text' /><br><input value='Add New Interpreter' type='submit' />`
        const nameLabel = document.createElement('label')
        nameLabel.innerText = "Name:"
        const nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.name = 'name'
        const languageLabel = document.createElement('label')
        languageLabel.innerText = "Language:"
        const languageInput = document.createElement('input')
        languageInput.type = 'text'
        languageInput.name = 'language_id'
        // const cityLabel = document.createElement('label')
        // cityLabel.innerText = "City:"
        // const cityInput = document.createElement('input')
        // cityInput.type = 'text'
        // cityInput.name = 'city_id'
        const cityDropdown = document.getElementById("city-dropdown")
        const cityInput = document.createElement('option')
        // debugger
        cityInput.value = City.all.forEach(city => city.name)
        cityInput.innerText = City.all.forEach(city => city.id)

        const intSubmit = document.createElement('input')
        intSubmit.type = 'submit'
        intSubmit.value = 'Create New Interpreter'
        cityDropdown.append(cityInput)
        form.append(nameLabel, nameInput, languageLabel, languageInput, intSubmit)
        formContainer.append(form)
        form.addEventListener("submit", handleCreateInterpreter)
    }
    
    showCreateForm() {
        const btn = document.getElementById('new-int-btn')
        btn.addEventListener('click', addCreateForm)
    }
}