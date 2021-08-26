const ApiLogRepository = require('../repositories/api_call_log')
const ApiDependency = require('../utils/api_dependency')

module.exports.getMovieList = async (req, res) => {
    const params = req.params.movie
    const page = (req.query || {}).page
    const movieList = await ApiDependency.searchMovies(params, page)

    if (movieList.status === false) {
        return res.error({ message: movieList.message })
    }

    const logPayload = {
        parameters: params,
        endpoint: '/search',
        parameters: {
            params,
            page
        }
    }

    await ApiLogRepository.insertLogdata(logPayload)

    return res.success({ payload: movieList })
}