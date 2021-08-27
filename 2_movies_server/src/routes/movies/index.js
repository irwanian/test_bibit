const router = require('express').Router()
const { validate } = require('../../utils/validator')
const { validateDetail, validateSearch } = require('../../validators/validation')

router.get('/search', validate(validateSearch), require('../../methods/search').getMovieList)
router.get('/detail', validate(validateDetail), require('../../methods/detail').getMovieDetail)

module.exports = router