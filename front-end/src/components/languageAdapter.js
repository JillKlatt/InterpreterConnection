const languageContainer = document.getElementById("languages-container")

class LanguageAdapter {

    constructor(baseURL){
        this.baseLanguageURL = `${baseURL}/api/v1/languages`
    }

    getLanguages(){
    fetch(this.baseLanguageURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(function(lang){
            languageContainer.innerHTML += `<li>${lang.name}</li>`
        })
    })
    // .then(data => console.log(data))
    .catch(error => console.error(error))
}

}