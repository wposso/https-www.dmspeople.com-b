const { error } = require('console');
const pool = require('../config/database_connection')

class requestService {

    async requestByIdService(id) {

        try {

            if (!id) {
                return {
                    success: false,
                    error: 'No se ingresado ningún ID'
                }
            }
            const { rows } = await pool.query('SELECT * FROM solicitudes WHERE usuario_id = $1', [id]);

            if (rows.length === 0) {
                return {
                    success: false,
                    error: 'No hay datos disponibles'
                }
            }

            return {
                success: true,
                data: rows[0]
            }

        } catch (err) {

            console.log(err.message)
            return {
                success: false,
                error: 'Error interno del servidor'
            }
        }
    }
}

module.exports = new requestService();