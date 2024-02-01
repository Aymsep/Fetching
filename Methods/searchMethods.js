// const searchKeyword = (data,keyword)=>{
//     return [...data].filter(product=>{
//         return product.title.includes(keyword) || product.description.includes(keyword)
//     })
// }

const searchKeyword = (data,keyword)=>{
    const pattern = new RegExp(keyword,"i")
    data.filter(product=>{
        // console.log(pattern.test(product.title)?product:'not found')
    })
}

module.exports = {
    searchKeyword
}