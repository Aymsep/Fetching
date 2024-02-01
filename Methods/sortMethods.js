const sortAsc = data =>{
    return [...data].sort((a,b)=>a.price - b.price)
}
const sortDesc = data =>{
    return [...data].sort((a,b)=>b.price + a.price)
}

module.exports = {
    sortDesc
}