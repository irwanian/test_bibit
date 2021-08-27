const Joi = require('joi')

const schema = {
    validateSearch: Joi.object({
        s: Joi.string().required().error(new Error('Please Insert Search Value')),
        y: Joi.number().error(new Error('Invalid Year')),
        type: Joi.string().valid('movies', 'series', 'episode').error(new Error('Invalid Type')),
        page: Joi.number().positive().error(new Error('Invalid Page'))
    }),
    validateDetail: Joi.object({
        i: Joi.string().length(9).optional().error(new Error('Invalid IMDB Id')),
        t: Joi.string().optional().error(new Error('Invalid Movie Title')),
        y: Joi.number().error(new Error('Invalid Year')),
        type: Joi.string().valid('movies', 'series', 'episode').error(new Error('Invalid Type')),
        plot: Joi.string().valid('short', 'long').error(new Error('Invalid Type')),

    })
}

module.exports = schema