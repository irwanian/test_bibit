const Joi = require('joi')

const schema = {
    validateSearch: Joi.object({
        movie: Joi.string().required().error(new Error('Please Insert Movie Title')),
        page: Joi.number().positive().error(new Error('Invalid Page'))
    }),
    validateDetail: Joi.object({
        id: Joi.string().length(7).required().error(new Error('Please Insert Correct IMDB Id'))
    })
}

module.exports = schema