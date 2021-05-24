const cityContainer = document.getElementById("cities-container")

class CityAdapter {

    constructor(baseURL){
        this.baseCityURL = `${baseURL}/api/v1/cities`
        this.cityDropDown = document.getElementById('city-dropdown')
    }

    getCities(){
    fetch(this.baseCityURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(function(city){
            const c = new City(city)
            // debugger
            c.addCityToDom()
  
            // cityContainer.innerHTML += `<li>${city.name}</li>`
        })
    })
    // .then(data => console.log(data))
    .catch(error => console.error(error))
}

    addCityToDom(){
        const cityDropDown = document.getElementById("city-dropdown")
        const cityInput = document.createElement('option')
        // debugger
        cityInput.value = this.id
        cityInput.innerText = this.name
        // cityInput.value = City.all.forEach(city => city.name)
        // cityInput.innerText = City.all.forEach(city => city.id)
        cityDropDown.append(cityInput)
    }
    // addIntToDom() {
    //     // debugger
    //     const interpreterContainer = document.getElementById('interpreters-container');
    //     interpreterContainer.innerHTML += `<li>${this.name}</li>`// -${this.language}, in ${this.city.name}</li>`
    // }

}