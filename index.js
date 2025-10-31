const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let tareas = [];

app.get('/tareas', (req, res) => {
    res.json(tareas);
});

app.post('/tareas', (req, res) => {
    const nuevaTarea = { id: Date.now(), ...req.body };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

app.put('/tareas/:id', (req, res) => {
    const { id } = req.params;
    const index = tareas.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
        tareas[index] = { ...tareas[index], ...req.body };
        return res.json(tareas[index]);
    }
    res.status(404).send('Task not found'); // Updated error message
});

app.delete('/tareas/:id', (req, res) => {
    const { id } = req.params;
    tareas = tareas.filter(t => t.id !== parseInt(id));
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});