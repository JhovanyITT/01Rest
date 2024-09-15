// Funcionalidad inicial
const express = require('express')
const bodyParser = require('body-parser')
const taskRoutes = require('./routes/taksRoutes')
const app = express();
app.use(bodyParser.json());

app.use('/task', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
});