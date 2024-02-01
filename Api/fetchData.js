const FetchData = async url =>{
try{
    const api = await fetch(url)
    const data = await api.json()
    return data
//
}catch(error){

}
}

module.exports = {
    FetchData
}