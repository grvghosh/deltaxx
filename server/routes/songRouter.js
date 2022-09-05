const ratingController = require('../controllers/ratingController')
const songController = require('../controllers/songController.js')



const router = require('express').Router()



router.post('/addSong', songController.upload , songController.addSong)

router.get('/allSongs', songController.getAllSongs)




router.post('/addRating/:id', ratingController.addRating)
router.get('/allRatings', ratingController.getAllRatings)



router.get('/getSongRatings/:id', songController.getSongRatings)




// Songs router
router.get('/:id', songController.getOneSong)

router.put('/:id', songController.updateSong)

module.exports = router