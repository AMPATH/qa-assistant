class StoreData {
    data: {[key: string]: any}
    constructor() {
        this.data = this.loadData()
    }

    saveInfo = (data: {[key: string]: any}) => localStorage.setItem('userInformation', JSON.stringify(data))

    loadData = () => localStorage.getItem('userInfo') || {}

    getData = (key: string) => this.data[key]
}


const storage = new StoreData()
export default storage;