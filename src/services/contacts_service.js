const pool = require('../config/database_connection');

class contacts {

    async getContactsByIdService(id) {

        try {
            if (!id) {
                return {
                    success: false,
                    error: 'No se ha ingresado ningún Id'
                }
            }

            const { rows } = await pool.query('SELECT * FROM contacto_emergencia WHERE usuario_id = $1', [id]);

            if (rows.length === 0) {
                return {
                    success: false,
                    error: `No se ha encontrado usuario con ID ${id}`
                }
            }

            return {
                success: true,
                data: rows[0]
            }
        } catch (err) {
            console.log(err.message);

            return {
                success: false,
                error: 'Error en getContactsByIdService', err
            }
        }
    }
}

module.exports = new contacts();