const {FetchData}  = require('./Api/fetchData')
const {filterProducts}  = require('./Methods/filterMethods.js')
const {sortDesc} = require('./Methods/sortMethods.js')
const {searchKeyword} = require('./Methods/searchMethods.js')
const {calculations} = require('./Methods/calculationMethods.js')
const {productDetails} = require('./Methods/detailsMethods.js')

async function ProductService(url){
    try{
        const products = await FetchData(url)
        const filteredProducts = filterProducts(products,"women's clothing")
        const search = searchKeyword(products,"SAMSUNG")
        const cal = calculations(products)
        const details = productDetails(url,100)
        console.log(details)
        return
    }catch(err){
        console.log('err message',err.message)
    }
}

ProductService('https://fakestoreapi.com/products')