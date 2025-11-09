const reqService = require('../services/request_service')

class requestController {

    async requestByIdController(req, res) {

        try {
            const { id } = req.params;

            const result = await reqService.requestByIdService(id);

            if (result.error) {
                return res.status(200).json({
                    error: result.error
                })
            }

            if (result.success) {
                return res.status(200).json({
                    data: result.data
                })
            }
        } catch (err) {
            return res.status(500).json({
                error: err.message
            })
        }
    }
}

module.exports = new requestController();