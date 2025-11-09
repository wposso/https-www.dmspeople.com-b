const userService = require('../services/users_service');

class userController {

    async getUsersController(req, res) {

        try {
            const users = await userService.getUserService();


            if (users.error) {
                return res.status(500).json({
                    error: users.error,
                    data: []
                })
            }

            if (users.success) {
                return res.status(200).json({
                    success: true,
                    data: users.data
                })
            }

        } catch (err) {
            return res.status(500).json({
                error: 'Error interno del servidor', err
            })
        }
    };

    async getUserByIdController(req, res) {
        try {
            const { id } = req.params;

            const userById = await userService.getUserByIdService(id);

            if (!userById.success) {
                return res.status(404).json({
                    success: false,
                    message: userById.message
                });
            }

            return res.status(200).json({
                success: true,
                data: userById.data
            });

        } catch (err) {
            console.error('Error en getUserByIdController:', err.message);
            return res.status(500).json({
                success: false,
                message: 'Error interno del servidor',
                error: err.message
            });
        }
    }

}

module.exports = new userController;