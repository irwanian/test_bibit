const axios = require('axios')
const { OMDB_URL } = process.env

module.exports.searchMovies = async (movie, page = 1) => {
    const result = {
        status: true,
        message: '',
        data: {}
    }

    try {
        const res = await axios.get(`${OMDB_URL}&s=${movie}&page=${page}`)
        result.status = res.data     
        
        return result
    } catch (error) {
        console.log(error)
        result.status = false
        result.message = error.response ? error.response.data.message : error.message

        return result
    }
}

module.exports.getMovieDetail = async (id) => {
    const result = {
        status: true,
        message: '',
        data: {}
    }
    
    try {
        const res = await axios.get(`${OMDB_URL}&i=${id}`)
        result.status = res.data     
        
        return result
    } catch (error) {
        result.status = false
        result.message = error.response ? error.response.data.message : error.message

        return result
    }
}