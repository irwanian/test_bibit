const axios = require('axios')
const { OMDB_URL } = process.env
const { parseDataObject } = require('../utils/helpers')

module.exports.searchMovies = async (params) => {
    const result = {
        status: true,
        message: '',
        data: {}
    }

    try {
        const res = await axios.get(OMDB_URL, { params })
        result.data = parseDataObject(res.data)   
        
        return result
    } catch (error) {
        console.log(error)
        result.status = false
        result.message = error.response ? error.response.data.message : error.message

        return result
    }
}

module.exports.getMovieDetail = async (params) => {
    const result = {
        status: true,
        message: '',
        data: {}
    }
    
    try {
        const res = await axios.get(OMDB_URL, { params })
        result.data = parseDataObject(res.data)
        
        return result
    } catch (error) {
        result.status = false
        result.message = error.response ? error.response.data.message : error.message

        return result
    }
}