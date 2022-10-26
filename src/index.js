const express = require('express');
const morgan = require('morgan');

const taskRoutes = require('./routes/tasks.routes');

const app = express();

app.use(morgan('dev')); // para ver por consola las peticiones que van llegando
app.use(express.json());

app.use(taskRoutes);

app.listen(4000);
console.log('Server on port 4000');