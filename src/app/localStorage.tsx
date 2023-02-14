class StoreData {
    data: {[key: string]: any}
    constructor() {
        this.data = this.loadData()
    }

    saveInfo = (data: {[key: string]: any}) => localStorage.setItem('userInformation', JSON.stringify(data))

    loadData = () => JSON.parse(localStorage.getItem('userInformation')) || {}

    // getData = (key: string) => this.data[key]
}
const storage = new StoreData()
export default storage;
