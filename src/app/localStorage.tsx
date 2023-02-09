
class StoreData {
    data: {[key: string]: any}
    constructor() {
        this.data = this.load()
    }

    save = (data: {[key: string]: any}) => localStorage.setItem('userInfo', JSON.stringify(data))

    load = () => localStorage.getItem('userInfo') || {}

    get = (key: string) => this.data[key]
}


const storage = new StoreData()
export default storage;