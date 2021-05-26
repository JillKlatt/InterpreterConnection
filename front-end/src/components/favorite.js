class Favorite {
    static all = []
    constructor(id){
        this.id = id
        
        Favorite.all.push(this)
    }

}