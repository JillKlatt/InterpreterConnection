const languageDropdown = document.createElement("select")
languageDropdown.id = "language-dropdown"
languageDropdown.name = "language"

class Language {
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name
    Language.all.push(this)

    }
    
addLanguageToDom(){
    // const languageDropDown = document.getElementById("language-dropdown")
    // const languageInput = document.createElement('option')
    // // 
    // languageInput.value = this.id
    // languageInput.innerText = this.name
    // // languageInput.value = language.all.forEach(language => language.name)
    // // languageInput.innerText = language.all.forEach(language => language.id)
    // 
    // languageDropDown.append(languageInput)

    const languageInput = document.createElement('option')
    languageAdapter.getLanguages()
    languageInput.value = this.id
    languageInput.innerText = this.name
    const form = document.getElementById("int-form")
    form.append(languageDropdown)
    languageDropdown.append(languageInput)
}
}
