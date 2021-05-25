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

    // fillCities(){
    //     debugger
    //     City.all.forEach(city => city.addCityToDom())
    // }

    addCityToDom(){
        // const cityDropDown = document.getElementById("city-dropdown")
        const cityInput = document.createElement('option')
        // const cityDropdown = document.getElementById("city-dropdown")


        // debugger

        cityAdapter.getCities()
        // debugger
        cityInput.value = this.id
        cityInput.innerText = this.name
        // cityInput.value = City.all.forEach(city => city.name)
        // cityInput.innerText = City.all.forEach(city => city.id)
        //debugger
        const form = document.getElementById("int-form")
        // debugger
        form.append(cityDropdown)
        cityDropdown.append(cityInput)
        // debugger
    }

}