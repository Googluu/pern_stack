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

const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query('SELECT * FROM task WHERE id = $1', [id])

    if (!result.rows.length) {
      return res.status(404).json({
        message: 'Task not found'
      });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    res.json({
      error: error.message,
      stack: error.stack
    });
  }
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