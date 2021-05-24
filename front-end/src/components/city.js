class City {
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name
        
        City.all.push(this)
    }

}