export default {
    getAll() {
        const listOfFavorite = localStorage.getItem('favorites')
        if(!listOfFavorite) return []
        return JSON.parse(listOfFavorite)
    },
    _setAll(value) {
        return localStorage.setItem('favorites', JSON.stringify(value))
    },
    addId(id) {
        if(!this.getAll().find(el => el === id)) this._setAll([...this.getAll(), id])
    }
}