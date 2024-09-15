const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');
const { Console } = require('console');

// Obteniendo todas las tareas
router.get('/', (req,res) => {
    const taks = taskController.getAllTaks();
    res.status(200).json(taks);
});

// Buscando una tarea por id
router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const searchedTask = taskController.findTaskByID(id);
    searchedTask != null ? res.status(200).json(searchedTask) : res.status(404).json({"response":"Elemento no encontrado"});
});

// Creando una nueva tarea
router.post('/', (req,res) => {
    const {title, description} = req.body;
    const newTaks = taskController.createTask(title, description);
    res.status(200).json(newTaks);
});

// Editar una tarea
router.put('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const {title, description} = req.body;
    const editedTask = taskController.editTask(id, title, description);
    editedTask != null ? res.status(200).json(editedTask) : res.status(404).json({"response":"Elemento no encontrado"});
});

/* Completar eliminar, actualizar y por ID  hasta el lunes 23:59*/
router.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const deletedTask = taskController.deleteTask(id);
    deletedTask != null ? res.status(200).json(deletedTask) : res.status(404).json({"response":"Elemento no encontrado"});
});

module.exports = router;