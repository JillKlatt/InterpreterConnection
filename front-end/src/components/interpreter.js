class Interpreter {
    constructor({id, name, email, phone, notes, city_id, language_id}){
        this.id = id
        this.name = name
        this.email = email
        this.phone = phone
        this.notes = notes
        this.cityId = city_id
        this.languageId = language_id
    }


    addIntToDom() {
        // debugger
        const interpreterContainer = document.getElementById('interpreters-container');
        interpreterContainer.innerHTML += `<li>${this.name}</li>`// -${this.language}, in ${this.city.name}</li>`
    }
}