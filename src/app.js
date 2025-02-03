const express = require('express');
const cors = require('cors');
const sequelize = require('./config');
const songRoutes = require('./routes/songRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', songRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        console.log("Conectado a la base de datos");
        app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
    })
    .catch(err => console.error("Error al conectar a la base de datos:", err));
