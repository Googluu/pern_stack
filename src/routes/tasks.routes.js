const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/tasks', async (req, res) => {
  const result = await pool.query('SELECT NOW()')
  res.json(result.rows[0].now);
});

router.get('/tasks/:id', (req, res) => {
  res.send('Estoy retornando una tarea');
});

router.post('/tasks', (req, res) => {
  res.send('Creando tareas');
});

router.put('/tasks', (req, res) => {
  res.send('Actualizando tareas');
});

router.delete('/tasks', (req, res) => {
  res.send('Eliminado tareas');
});

module.exports = router;