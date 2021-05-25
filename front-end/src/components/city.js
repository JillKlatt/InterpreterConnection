class City {
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name
        
        City.all.push(this)
    }
    addCityToDom(){
        const cityDropDown = document.getElementById("city-dropdown")
        const cityInput = document.createElement('option')
        // debugger
        cityInput.value = this.id
        cityInput.innerText = this.name
        // cityInput.value = City.all.forEach(city => city.name)
        // cityInput.innerText = City.all.forEach(city => city.id)
        // debugger
        cityDropDown.append(cityInput)
    }

}