const contactsService = require('../services/contacts_service');

class contactsController {

    async getContactByIdController(req, res) {

        const { id } = req.params;

        const result = await contactsService.getContactsByIdService(id);

        if (result.error) {
            return res.status(500).json({
                error: result.error
            })
        }

        if (result.success) {
            return res.status(200).json({
                data: result.data
            })
        }
    }
}

module.exports = new contactsController();