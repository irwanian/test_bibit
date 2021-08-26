module.exports.validate = (schema, property) => {
    return (req, res, next) => {
        const arguments = { ...req.query || null, ...req.params }

        const { error } = schema.validate(arguments)

        if (error) {
            return res.error(error)
        }
        
        next()    
    }
}