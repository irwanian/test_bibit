const ApiCallLogModel = require('../models').mysql.api_call_logs

module.exports.insertLogdata = async (params, transaction = null) => {
    await ApiCallLogModel.create(params, { transaction })
}
