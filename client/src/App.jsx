
import './App.css';
import DragAndDrop from './pages/Drag-n-Drop/dragAndDrop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stepper from './pages/stepper/Stepper.jsx';
import Quiz from './pages/quiz/quiz.jsx';
import Home from './pages/Home List/Home.jsx';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/stepper' element={<Stepper/>}/>
          <Route path='/dragNdrop' element={<DragAndDrop />} />
          <Route path='/quiz' element={<Quiz/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
