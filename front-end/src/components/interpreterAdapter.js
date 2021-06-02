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
    
}

