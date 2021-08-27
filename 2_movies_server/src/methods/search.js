const ApiDependency = require('../utils/api_dependency')
const { insertLog } = require('../utils/log')

module.exports.getMovieList = async (req, res) => {
    const params = req.query
    console.log(params)
    const movieList = await ApiDependency.searchMovies(params)
    const meta = {
        total_data: movieList.data.totalResults || 0,
        total_page: Math.ceil(Number(movieList.data.totalResults) / 10)
    }

    const logPayload = {
        endpoint: '/search',
        parameters: {
            s: params.s,
            y: params.y || null,
            type: params.type || null,
            page: params.page || null,
         }
    }

    if (!movieList.status) {
        insertLog({ ...logPayload, result: 'failed' })
        return res.error({ message: movieList.message })
    } else if (!meta.total_data) {
        insertLog({ ...logPayload, result: 'failed' })
        return res.error({ message: 'No Data Found', code: 404 })
    }

    insertLog({ ...logPayload, result: 'success' })

    return res.success({ payload: movieList.data.Search, meta })
}