class Language {
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name
    Language.all.push(this)

    }
    
addLanguageToDom(){
    const languageDropDown = document.getElementById("language-dropdown")
    const languageInput = document.createElement('option')
    // debugger
    languageInput.value = this.id
    languageInput.innerText = this.name
    // languageInput.value = language.all.forEach(language => language.name)
    // languageInput.innerText = language.all.forEach(language => language.id)
    debugger
    languageDropDown.append(languageInput)
}
}