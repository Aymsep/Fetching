const filterProducts = (data, category)=>{
    return data.filter(product=>product.category == category)
}


module.exports = {
    filterProducts
}