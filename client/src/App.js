import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Menu from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/task/new' element={<TaskForm />} />
          <Route path='/task/:id/edit' element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
