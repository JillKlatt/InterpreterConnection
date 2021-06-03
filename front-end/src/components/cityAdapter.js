const cityContainer = document.getElementById("cities-container")

class CityAdapter {

    constructor(baseURL){
        this.baseCityURL = `${baseURL}/api/v1/cities`
    }

    getCities(){
    fetch(this.baseCityURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(function(city){
            const c = new City(city)

        })
    })
    .catch(error => console.error(error))
    }

}