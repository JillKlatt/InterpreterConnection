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
            //c.addCityToDom()
  
            // cityContainer.innerHTML += `<li>${city.name}</li>`
        })
    })
    // .then(data => console.log(data))
    .catch(error => console.error(error))
    }

}