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


    listenforDelete() {
        interpreterContainer.addEventListener('click', interpreterForm.handleDelete)
    }
    
    // handleDelete(e) {
    //     const id = e.target.previousElementSibling.dataset.id
    //     const li = e.target.previousElementSibling
    //     debugger
    //     const btn = e.target
    //     console.log(e.target)
    //         if (e.target.dataset.action == 'delete'){
    //             // debugger
    //             // delete this interpreter from backend
    //             fetch(`http://localhost:3000/api/v1/interpreters/${id}`, {
    //             // console.log(id)
    //             method: "DELETE",
    //             })
    //             .then(resp => {
         
    //                 console.log(resp)
    //                 return resp.json()
    //             })
    //             .then(data => {
    //                 // debugger
    //                 // if (data.status === 204) {
    //                     // e.target.previousElementSibling.dataset.remove
    //                 // }
    //                 // console.log(data)
    //                 // debugger
    //                 if (data.message === "Successfully deleted"){
    //                     console.log(li)
    //                     li.remove()
    //                     // const toRemove = document.getElementById(`data-id=${id}`)
    //                     // console.log(toRemove)
    //                     // e.target.previousElementSibling.dataset.remove()
    //                     // const interpreterContainer = document.getElementById("interpreters-container")
    //                     // interpreterContainer.getInterpreters
    
    //                 } else {
    //                     alert(data.message)
    //                 }
    
    //             })
        
    //             // .catch(err => console.error(err))
    //     }
    // }
}

