const infoUserService = require('../services/infouser_service');

class infoUserController {

    async infoUserController(req, res) {

        const response = await infoUserService.getInfoUserService();

        if (response.error) {
            return res.status(500).json({
                error: response.error
            })
        }

        if (response.success) {
            return res.status(200).json({
                data: response.data
            })
        }
    };

    async infoUserByIdController(req, res) {

        const { id } = req.params;

        const response = await infoUserService.getInfoUserByIdService(id);

        if (response.error) {
            return res.status(500).json({
                error: response.error
            })
        }

        if (response.success) {
            return res.status(200).json({
                data: response.data
            })
        }
    }
}

module.exports = new infoUserController();