const interpreterContainer = document.getElementById("interpreters-container")

class InterpreterAdapter {

    constructor(baseURL){
        this.baseIntURL = `${baseURL}/api/v1/interpreters`
    }

    getInterpreters(){
    fetch(this.baseIntURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(interpreter => {
            const i = new Interpreter(interpreter)

            i.addIntToDom()
        })
    })
    .catch(error => console.error(error))
}


    listenforClick() {
        interpreterContainer.addEventListener('click', interpreterForm.handleInterpreterClick)
    }

    handleCreateInterpreter(e) {
        e.preventDefault()
        const intForm = document.getElementById('int-form')
        intForm.classList.add("hidden")
        const newIntButton = document.getElementById('new-int-btn')
        newIntButton.classList.remove("hidden")

        let nameInput = document.getElementById('name-input').value
        let languageInput = document.getElementById('language-dropdown').value
        let cityInput = document.getElementById('city-dropdown').value
        let emailInput = document.getElementById("email-input").value
        let phoneInput = document.getElementById("phone-input").value
        let notesInput = document.getElementById("notes-input").value
        const newIntObj = {
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
        }
        fetch("http://localhost:3000/api/v1/interpreters", newIntObj)
            .then(resp => resp.json())
            .then(data => {
                if (data.status === 201) {
                    const newInt = new Interpreter(data.interpreter)
                    newInt.addIntToDom()
                    document.getElementById('name-input').value = ""
                    document.getElementById('email-input').value = ""
                    document.getElementById('phone-input').value = ""
                    document.getElementById('notes-input').value = ""
    
                } else {
                    alert(data.errors)
                }
            })
            .catch(
                err => { console.error("Catch Error:", err), alert(err) }
            )
    }
    
}

