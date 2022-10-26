const { Router } = require('express');
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.put('/tasks', updateTask);

router.delete('/tasks', deleteTask);

module.exports = router;