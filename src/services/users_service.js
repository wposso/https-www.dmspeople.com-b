const { json } = require('stream/consumers');
const pool = require('../config/database_connection');

class userService {

    async getUserService() {

        try {
            const result = await pool.query('SELECT * FROM usuarios');

            if (result.rows === 0) {
                return {
                    success: false,
                    error: 'No hay usuarios disponibles',
                    data: []
                }
            }

            return {
                success: true,
                data: result.rows
            }
        } catch (err) {
            return {
                success: false,
                error: 'Error general al consultar'
            }
        }

    };

    async getUserByIdService(id) {

        try {

            if (!id) {
                return {
                    success: false,
                    message: `No se ha encontrado el usuario con ID ${id}`
                }
            }

            const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);

            if (result.rows.length === 0) {
                return {
                    success: false,
                    message: 'No hay usuarios disponibles'
                }
            }

            return {
                success: true,
                data: result.rows[0]
            }
        } catch (err) {
            return {
                success: false,
                error: err.message
            }
        }
    }
}

module.exports = new userService();