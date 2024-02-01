const calculations = (data=>{
    const total = data.reduce((acc,current)=>{
        return acc + current.price
    },0)
    return Math.floor(total/data.length)
})

module.exports = {calculations}