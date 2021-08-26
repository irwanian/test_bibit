const ApiLogRepository = require('../repositories/api_call_log')
const ApiDependency = require('../utils/api_dependency')

module.exports.getMovieDetail = async (req, res) => {
    const id = req.params.id
    const moviedetail = await ApiDependency.getMovieDetail(id)

    if (moviedetail.status === false) {
        return res.error({ message: moviedetail.message })
    }

    const logPayload = {
        parameters: params,
        endpoint: '/detail',
        parameters: {
            params
        }
    }

    await ApiLogRepository.insertLogdata(logPayload)

    return res.success({ payload: moviedetail })
}