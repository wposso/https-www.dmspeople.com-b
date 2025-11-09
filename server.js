const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const userRoute = require('./src/routes/users_route');
const infoUserRoute = require('./src/routes/infouser_route');
const contactsRoute = require('./src/routes/contacts_route');
const reqRoute = require('./src/routes/request_route');

app.use(cors());

app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Servidor corriendo con éxito'
    })
})

app.use('/api/usuarios', userRoute);
app.use('/api/infouser', infoUserRoute);
app.use('/api/contacts', contactsRoute);
app.use('/api/request', reqRoute);

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})