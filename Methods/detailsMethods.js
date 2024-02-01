const productDetails =async (url,id)=>{
    try{
        const api = await fetch(`${url}/${id}`);
        const data = await api.json()
        console.log(data)
    }catch(err){
        throw new Error('products not founds')
    }
}
module.exports = {productDetails}