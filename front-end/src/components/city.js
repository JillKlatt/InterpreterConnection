const cityDropdown = document.createElement("select")
cityDropdown.id = "city-dropdown"
cityDropdown.name = "city"

class City {
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name
        
        City.all.push(this)
    }


    addCityToDom(){

        const cityInput = document.createElement('option')
        cityAdapter.getCities()
        cityInput.value = this.id
        cityInput.innerText = this.name
        const form = document.getElementById("int-form")
        form.append(cityDropdown)
        cityDropdown.append(cityInput)
    }

}