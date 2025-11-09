const { error } = require('console');
const pool = require('../config/database_connection');

class infoUsuarios {

    async getInfoUserService() {
        try {
            const {rows} = await pool.query('SELECT * FROM info_usuario');

            if (rows.length === 0) {
                return {
                    success: false,
                    error: 'No hay datos disponibles'
                }
            }

            return {
                success: true,
                data: rows
            }
        } catch (err) {
            console.error('Error en getInfoUserService:', err);
            return {
                success: false,
                error: 'Error interno en el servidor'
            };
        }

    };

    async getInfoUserByIdService(id) {
        try {
            if (!id) {
                return {
                    success: false,
                    error: 'No se ha ingresado un ID'
                }
            }

            const {rows} = await pool.query('SELECT * FROM info_usuario WHERE usuario_id = $1', [id]);

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
            console.error('Error en getInfoUserService:', err);
            return {
                success: false,
                error: 'Error interno en el servidor'
            };
        }
    }
}

module.exports = new infoUsuarios();