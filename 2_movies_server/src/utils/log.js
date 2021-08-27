const ApiCallLogRepository = require('../repositories/api_call_log')

module.exports.insertLog = async (params) => {
    await ApiCallLogRepository.insertLogdata(params)
}