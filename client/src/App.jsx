
import './App.css';
import DragAndDrop from './pages/Drag-n-Drop/dragAndDrop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stepper from './pages/stepper/Stepper.jsx';
import Quiz from './pages/quiz/quiz.jsx';
import Home from './pages/Home List/Home.jsx';
import DarkMode from './pages/Dark Mode/DarkMode.jsx';
import Pagination from './pages/Pagination/Pagination.jsx';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stepper' element={<Stepper />} />
          <Route path='/dragNdrop' element={<DragAndDrop />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/darkMode' element={<DarkMode />} />
          <Route path='/pagination' element={<Pagination />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
