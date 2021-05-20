const interpreterContainer = document.getElementById("interpreters-container")

class InterpreterAdapter {

    constructor(baseURL){
        this.baseIntURL = `${baseURL}/api/v1/interpreters`
    }

    getInterpreters(){
    fetch(this.baseIntURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(function(interpreter){
            interpreterContainer.innerHTML += `<li>${interpreter.name} -${interpreter.language.name}, in ${interpreter.city.name}</li>`
            console.log(interpreter)
        })
    })
    // .then(data => console.log(data))
    .catch(error => console.error(error))
}

}

