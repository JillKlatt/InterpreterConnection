class Interpreter {
    static all = []
    constructor({id, name, email, phone, notes, city_id, language_id}){
        this.id = id
        this.name = name
        this.email = email
        this.phone = phone
        this.notes = notes
        this.cityId = city_id
        this.languageId = language_id

        Interpreter.all.push(this)
    }


    addIntToDom() {
        // debugger
        const interpreterContainer = document.getElementById('interpreters-container');
        // debugger
        const interpreterCity = City.all.find(city => city.id === parseInt(`${this.cityId}`)).name
        const interpreterLanguage = Language.all.find(language => language.id === parseInt(`${this.languageId}`)).name
        const dataId = this.id
        const deleteIntBtn = document.createElement('button')
        deleteIntBtn.innerText = "X"
        deleteIntBtn.action = 'delete'
        //interpreterContainer.innerHTML += this.renderInterpreter()

        interpreterContainer.innerHTML += `<li data-set=${dataId}><span>${this.name}</span> - ${interpreterLanguage}, in ${interpreterCity}</li><button data-action='delete'>X</button><button data-action='favorite'>&#9829;</button>`
//*  *//
//<button data-action='edit'>E</button>
// ${deleteIntBtn}
    }

    // renderInterpreter(){
    //     debugger
    //     return `<li>${this.name} - ${interpreterLanguage}, in ${interpreterCity}</li><button data-action='delete'>X</button><button data-action='favorite'>&#9829;</button>`
    // }
}