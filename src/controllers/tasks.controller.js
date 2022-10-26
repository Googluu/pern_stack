const getAllTasks = async (req, res) => {
  res.send('Listando las tareas');
}

const getTask = (req, res) => {
  res.send('Estoy retornando una tarea');
}

const createTask = (req, res) => {
  res.send('Creando tareas');
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