const pool = require('../db');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await pool.query('SELECT * FROM task');
    res.json(allTasks.rows)
  } catch (error) {
    res.json({
      error: error.message,
      stack: error.stack
    });
  }
}

const getTask = (req, res) => {
  res.send('Estoy retornando una tarea');
}

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query("INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *", [
      title,
      description,
    ]);

    res.json(result.rows[0]);
  } catch (error) {
    res.json({
      error: error.message,
      stack: error.stack
    });
  }
}

const updateTask = (req, res) => {
  res.send('Actualizando tareas');
}

const deleteTask = (req, res) => {
  res.send('Eliminado tareas');
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}