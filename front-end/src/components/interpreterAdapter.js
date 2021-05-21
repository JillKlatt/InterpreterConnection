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
            interpreterContainer.innerHTML += `<li data-id="${interpreter.id}">${interpreter.name} -${interpreter.language.name}, in ${interpreter.city.name}</li><button data-action='delete'>X</button>`
            // console.log(interpreter)
        })
    })
    // .then(data => console.log(data))
    .catch(error => console.error(error))
}

    // listenforDelete() {
    //     interpreterContainer.addEventListener('click', handleDelete)
    // }

    // handleDelete(e) {
    //     if (e.target.dataset.action == 'delete'){
    //         console.log("DELETE SOMETHING")
    //     } else {
    //     console.log("nope")
    //     }
    // }
}

