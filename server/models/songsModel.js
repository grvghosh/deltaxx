module.exports = (song, DataTypes) => {

    const Song = song.define("song", {
        image: {
            type: String
        },
        song: {
            type: String
            
        },
        dateOfRelease: {
            type: String
        },
        artists: {
            type: String
        },
    })

    return Song

}