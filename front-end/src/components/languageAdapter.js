const languageContainer = document.getElementById("languages-container")

class LanguageAdapter {

    constructor(baseURL){
        this.baseLanguageURL = `${baseURL}/api/v1/languages`
        this.languageDropDown = document.getElementById('language-dropdown')
    }

    getLanguages(){
    fetch(this.baseLanguageURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(function(lang){
            const l = new Language(lang)
            l.addLanguageToDom()
        })
    })
    // .then(data => console.log(data))
    .catch(error => console.error(error))
}

}