import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';

export default function TaskList() {

  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const returnTask = async () => {
    const response = await fetch('http://localhost:4000/tasks')
    const data = await response.json()
    setTasks(data)
  }

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter(task => task.id !== id))
  };

  useEffect(() => {
    returnTask()
  }, [])

  return (
    <>
      <h1>Lista de Tasks</h1>
      {
        tasks.map(task => (
          <Card key={task.id} style={{
            marginBottom: '.7rem',
            backgroundColor: '#1e272e'
          }}>
            <CardContent style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div style={{color: 'white'}}>
                <Typography>{task.title}</Typography>
                <Typography>{task.description}</Typography>
              </div>

              <div>
                <Button
                  variant='contained'
                  color='inherit'
                  onClick={() => navigate(`/task/${task.id}/edit`)}
                >
                  Edit
                </Button>
                <Button
                  variant='contained'
                  color='warning'
                  onClick={() => handleDelete(task.id)}
                  style={{
                    margin: '.5rem'
                  }}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}
