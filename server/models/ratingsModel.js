module.exports = (rating, DataTypes) => {

    const Rating = rating.define("ratings", {
        rate: {
            type: Number
        }
    
    })

    return Rating

}