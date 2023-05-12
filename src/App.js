import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ToDoList from './pages/ToDoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tdl' element={<ToDoList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
