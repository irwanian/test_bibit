const ApiDependency = require('../utils/api_dependency')
const { insertLog } = require('../utils/log')


module.exports.getMovieDetail = async (req, res) => {
    const params = req.query
    let moviedetail = await ApiDependency.getMovieDetail(params)

    const logPayload = {
        parameters: {
            i: params.i || null,
            t: params.t || null,
            y: params.y || null,
            type: params.type || null,
            plot: params.plot || null
        },
        endpoint: '/detail',
    }

    if (!moviedetail.status) {
        insertLog({ ...logPayload, result: 'failed' })
        return res.error({ message: moviedetail.message })
    }

    insertLog({ ...logPayload, result: 'success' })

    return res.success({ payload: moviedetail.data })
}